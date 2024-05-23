import "./Login.css"
import { Link } from "react-router-dom"
function Login() {
  return (
    <div>
        <div className="flayout h-screen w-full flex ">
        <div className="card  m-auto w-[1000px] flex flex-row rounded-[20px] relative h-[850px] ">
            <img src={require("../../../public/images/card.png")} alt=""  className="w-[100%]    z-0 rounded-[20px] "/>
            <div className="fspace w-[68%]  z-10 bg-white rounded-[20px] absolute top-0 right-[0px] h-full flex flex-col justify-center items-center">
                <form action="" className="flex flex-col h-[50%] w-[550px] justify-between items-center">
                    <h2 className="font-bold  ">تسجيل الدخول</h2>
                    <div className="email relative">
                        <label htmlFor=" " className="absolute right-[23px] -top-[25%] bg-white px-1 text-[18px] font-normal">البريد الالكتروني</label>
                        <input type="email" name="" id="" className=" border-[1px] border-black w-[550px] h-[60px] rounded-[20px] text-center text-[20px]"/> 
                    </div>
                    <div className="password relative">
                        <label htmlFor="" className=" absolute right-[23px] -top-[25%] bg-white px-1 text-[18px] font-normal">كلمة المرور </label>
                        <input type="password" name="" id="" className=" border-[1px] border-black w-[550px] h-[60px] rounded-[20px] text-center text-[20px]" /> 
                    </div>
                    <button  type="submit" className="w-[550px] h-[60px] bg-color-2 text-[24px] rounded-[20px] mt-[0px] text-center pt-[5px] font-bold"><Link to="/auth">تسجيل الدخول</Link></button>
                </form>
                <div className="emailchick flex flex-row-reverse w-[500px] justify-between mt-[45px] " >
                    <p className=" text-[18px]">هل لديك حساب ؟</p>
                    <Link to="/signup" href="" className="text-[18px] pl-[100px] text-color-3">إنشاء حساب</Link>
                    <a href="" className="text-[18px] text-color-3">نسيت كلمة المرور</a>
                </div>
                <p className=" style text-gray-400 text-[24px] my-[45px] font-bold relative">أو</p>
                <div className="sLinks flex flex-row justify-between items-center w-[550px]">

                    <div className="sLink w-[160px] h-[50px] bg-white border-[1px] border-gray-200 align-middle text-center flex flex-row rounded-[20px] ">
                        <img src={require("../../assets/google.png")} alt=""  className="h-[35px]" />
                        <p className=" pp text-[24px] ">Google</p>
                    </div>
                    <div className="sLink w-[165px] h-[50px] align-middle text-center bg-black flex flex-row rounded-[20px]">
                        <img src={require("../../assets/apple.png")} alt=""  className="h-[35px]" />
                        <p className="text-[24px] text-white ">Apple</p>
                    </div>
                    <div className="sLink w-[165px] h-[50px] align-middle text-center flex flex-row bg-[#1877F2] rounded-[20px]">
                        <img src={require("../../assets/fb.png")} alt=""  className="rounded-[20px] h-[35px]" />
                        <p className="text-[24px] text-white ">Facebook</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login