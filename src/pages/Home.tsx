import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-cover bg-center bg-[url('/assets/bg.jpg')] px-4">
      <div className=' w-full  sm:w-3/4 md:w-1/2 h-1/2 sm:h-1/2 bg-white/50  rounded-3xl flex flex-col justify-center items-center p-6 sm:p-10'>
        <h1 className='text-2xl sm:text-3xl font-semibold mb-6 sm:mb-10'>
          {" "}
          سلام ، خوش آمدید!{" "}
        </h1>
        <p className='text-sm sm:text-lg font-medium mb-6 sm:mb-9 text-center p-2'>
          کاربر گرامی، در صورت عضویت در سایت بر روی دکمه <b> ورود</b> کلیک
          نمایید ، در غیر اینصورت ابتدا میبایست در سایت عضو شوید!
        </p>
        <div className='flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full '>
          <button
            className='p-3 sm:p-4 bg-blue-800 w-full sm:w-28 rounded-2xl text-sm sm:text-lg text-white hover:bg-blue-900 transition duration-300'
            onClick={() => navigate("/LoginPage")}
          >
            ورود
          </button>
          <button
            className='p-3 sm:p-4 bg-blue-400 w-full sm:w-28 rounded-2xl text-sm sm:text-lg text-white hover:bg-blue-500 transition duration-300'
            onClick={() => navigate("/SignupPage")}
          >
            ثبت‌نام
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
