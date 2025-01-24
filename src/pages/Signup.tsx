import { FaUser } from "react-icons/fa";
import { IoLockClosed, IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";

import { useFormik } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "تعداد کاراکتر غیرمجاز می باشد")
    .max(30, "تعداد کاراکتر غیرمجاز می باشد")
    .required("الزامی می باشد"),
  password: Yup.string()
    .min(6, "تعداد کاراکتر غیرمجاز می باشد")
    .max(30, "تعداد کاراکتر غیرمجاز می باشد")
    .required("الزامی می باشد"),
  email: Yup.string().email("ایمیل معتبر نمی باشد").required("الزامی می باشد"),
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password"), undefined],
      "رمز عبور با تکرار آن همخوانی ندارد"
    )
    .required("الزامی می باشد"),
});

interface FormValues {
  username: string;
  password: string;
  email: string;
  confirmPassword: string;
}

const Signup: React.FC = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <div className='h-screen w-full bg-gradient-to-r from-[#8EC5FC] to-[#E0C3FC] flex  flex-col justify-center items-center px-4'>
      <Link
        to='/'
        className='fixed top-0 left-0 text-2xl sm:text-3xl m-2 sm:m-4 cursor-pointer bg-white p-2 rounded-full'
      >
        <IoHome />
      </Link>
      <div className=' w-full max-w-md sm:max-w-lg flex justify-center items-center bg-white/50 rounded-3xl shadow-lg p-6'>
        <form
          onSubmit={formik.handleSubmit}
          className='flex flex-col justify-center items-center p-4 sm:p-7 w-full'
        >
          <h1 className='text-lg sm:text-2xl font-bold mb-4 text-center'>
            فرم ثبت نام
          </h1>
          <div className='flex items-center mb-3 sm:mb-4 gap-1 w-full'>
            <input
              type='text'
              name='username'
              placeholder='نام کاربری'
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='flex-grow w-full sm:w-96 p-3 border rounded-lg outline-hidden focus:border-blue-400'
            />
            <FaUser />
          </div>
          {formik.touched.username && formik.errors.username ? (
            <div className='text-red-500 text-xs sm:text-sm mb-2 sm:mb-3'>
              {formik.errors.username}
            </div>
          ) : null}
          <div className='flex items-center mb-3 sm:mb-4 gap-1 w-full'>
            <input
              type='email'
              name='email'
              placeholder='ایمیل'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='flex-grow w-full sm:w-96 p-3 border rounded-lg outline-hidden focus:border-blue-400'
            />
            <IoMail />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div className='text-red-500 text-xs sm:text-sm mb-2 sm:mb-3'>
              {formik.errors.email}
            </div>
          ) : null}
          <div className='flex items-center mb-3 sm:mb-4 gap-1 w-full'>
            <input
              type='password'
              name='password'
              placeholder='رمز عبور'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='flex-grow w-full sm:w-96 p-3 border rounded-lg outline-hidden focus:border-blue-400'
            />
            <IoLockClosed />
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div className='text-red-500 text-xs sm:text-sm mb-2 sm:mb-3'>
              {" "}
              {formik.errors.password}
            </div>
          ) : null}
          <div className='flex items-center mb-3 sm:mb-4 gap-1 w-full'>
            <input
              type='password'
              placeholder='تکرار رمز عبور'
              name='confirmPassword'
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='flex-grow w-full sm:w-96 p-3 border rounded-lg outline-hidden focus:border-blue-400'
            />
            <IoLockClosed />
          </div>
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className='text-red-500 text-xs sm:text-sm mb-2 sm:mb-3'>
              {formik.errors.confirmPassword}
            </div>
          ) : null}
          <button
            type='submit'
            className='p-2 sm:p-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition duration-300 w-1/2 sm:w-auto'
          >
            {" "}
            ثبت نام
          </button>
          <div className='mt-4 text-center'>
            <p>
              حساب کاربری دارید؟{" "}
              <Link to='/LoginPage' className='underline text-blue-400 text-lg'>
                ورود
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
