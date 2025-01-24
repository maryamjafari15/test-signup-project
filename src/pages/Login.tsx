import { IoMail } from "react-icons/io5";
import { IoLockClosed } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <div className='h-screen w-full bg-gradient-to-r from-[#A9C9FF] to-[#FFBBEC] flex justify-center items-center px-4'>
      <Link
        to='/'
        className='fixed top-0 left-0 text-2xl sm:text-3xl m-2 sm:m-4 cursor-pointer bg-white p-2 rounded-full'
      >
        <IoHome />
      </Link>

      <div className='  flex w-full max-w-md sm:max-w-lg justify-center items-center bg-white/50  rounded-3xl shadow-lg p-6'>
        <form className='flex flex-col justify-center items-center p-7'>
          <h1 className='text-lg sm:text-2xl font-bold mb-4 text-center'>
            {" "}
            ورود کاربران
          </h1>
          <div className='flex  items-center mb-4 gap-1'>
            <input
              type='email'
              placeholder='ایمیل'
              className='flex-grow w-full sm:w-96 p-3 border rounded-lg outline-none focus:border-blue-400'
            />
            <IoMail />
          </div>

          <div className='flex items-center mb-4 gap-1'>
            <input
              type='password'
              placeholder='رمز عبور'
              className='flex-grow w-full sm:w-96 p-3 border rounded-lg outline-none focus:border-blue-400'
            />
            <IoLockClosed />
          </div>

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
