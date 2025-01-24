import { IoMail } from "react-icons/io5";
import { IoLockClosed } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";

import { useAppDispatch, useAppSelector } from "../Redux/reduxHooks";
import { loginUser } from "../Redux/authSlice";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("ایمیل معتبر نمی باشد").required("الزامی می باشد"),
  password: Yup.string()
    .min(6, "تعداد کاراکتر غیرمجاز می باشد")
    .max(30, "تعداد کاراکتر غیرمجاز می باشد")
    .required("الزامی می باشد"),
});

interface FormValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  
  const { error, loading } = useAppSelector((state: any) => state.auth);

  const formik = useFormik<FormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      try {
        await dispatch(
          loginUser({ email: values.email, password: values.password })
        ).unwrap();
        alert("ورود موفقیت آمیز بود!");
        navigate("/");
      } catch (error: any) {
        const firebaseErrorCodes: { [key: string]: string } = {
          "auth/invalid-email": "ایمیل وارد شده معتبر نمی‌باشد.",
          "auth/user-not-found": "کاربری با این ایمیل پیدا نشد.",
          "auth/wrong-password": "رمز عبور اشتباه است.",
          "auth/operation-not-allowed":
            "عملیات غیرمجاز است. لطفاً با پشتیبانی تماس بگیرید.",
          "auth/network-request-failed":
            "خطا در اتصال به سرور. لطفاً اتصال اینترنت خود را بررسی کنید.",
          "auth/internal-error":
            "یک خطای داخلی رخ داده است. لطفاً دوباره تلاش کنید.",
        };

        const errorMessage =
          firebaseErrorCodes[error.code] ||
          "خطایی ناشناخته رخ داده است. لطفاً دوباره تلاش کنید.";
        alert(errorMessage);
      }
    },
  });

  return (
    <div className='h-screen w-full bg-gradient-to-r from-[#A9C9FF] to-[#FFBBEC] flex flex-col justify-center items-center px-4'>
      <Link
        to='/'
        className='fixed top-0 left-0 text-2xl sm:text-3xl m-2 sm:m-4 cursor-pointer bg-white p-2 rounded-full'
      >
        <IoHome />
      </Link>
      {loading && <div>در حال پردازش...</div>}
      {error && <div className='text-red-500'>{error}</div>}

      <div className='  flex w-full max-w-md sm:max-w-lg justify-center items-center bg-white/50  rounded-3xl shadow-lg p-6'>
        <form
          onSubmit={formik.handleSubmit}
          className='flex flex-col justify-center items-center p-7'
        >
          <h1 className='text-lg sm:text-2xl font-bold mb-4 text-center'>
            {" "}
            ورود کاربران
          </h1>
          <div className='flex  items-center mb-4 gap-1'>
            <input
              type='email'
              placeholder='ایمیل'
              name='email'
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

          <div className='flex items-center mb-4 gap-1'>
            <input
              type='password'
              placeholder='رمز عبور'
              name='password'
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
          <button
            type='submit'
            className='p-2 sm:p-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition duration-300 w-1/2 sm:w-auto'
          >
            {" "}
            ورود
          </button>
          <div className='mt-2 sm:mt-4 text-center'>
            <p>
              حساب کاربری ندارید؟
              <Link
                to='/SignupPage'
                className='underline text-blue-400 sm:text-lg'
              >
                عضویت
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
