import { FaUser } from "react-icons/fa";
import { IoLockClosed, IoMail } from "react-icons/io5";
import { Link} from "react-router-dom";
import { IoHome } from "react-icons/io5";

const Signup: React.FC = () => {


  return (
    <div className='h-screen w-full bg-gradient-to-r from-[#8EC5FC] to-[#E0C3FC] flex  flex-col justify-center items-center px-4'>
      <Link
        to='/'
        className='fixed top-0 left-0 text-2xl sm:text-3xl m-2 sm:m-4 cursor-pointer bg-white p-2 rounded-full'
      >
        <IoHome />
      </Link>
      <div className=' w-full max-w-md sm:max-w-lg flex justify-center items-center bg-white/50 rounded-3xl shadow-lg p-6'>
        <form className='flex flex-col justify-center items-center p-4 sm:p-7 w-full'>
          <h1 className='text-lg sm:text-2xl font-bold mb-4 text-center'>
            فرم ثبت نام
          </h1>
          <div className='flex items-center mb-3 sm:mb-4 gap-1 w-full'>
            <input
              type='text'
              className='flex-grow w-full sm:w-96 p-3 border rounded-lg outline-hidden focus:border-blue-400'
            />
            <FaUser />
          </div>
          <div className='flex items-center mb-3 sm:mb-4 gap-1 w-full'>
            <input
              type='text'
              className='flex-grow w-full sm:w-96 p-3 border rounded-lg outline-hidden focus:border-blue-400'
            />
            <IoMail />
          </div>
          <div className='flex items-center mb-3 sm:mb-4 gap-1 w-full'>
            <input
              type='text'
              className='flex-grow w-full sm:w-96 p-3 border rounded-lg outline-hidden focus:border-blue-400'
            />
            <IoLockClosed />
          </div>
          <div className='flex items-center mb-3 sm:mb-4 gap-1 w-full'>
            <input
              type='text'
              className='flex-grow w-full sm:w-96 p-3 border rounded-lg outline-hidden focus:border-blue-400'
            />
            <IoLockClosed />
          </div>
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
