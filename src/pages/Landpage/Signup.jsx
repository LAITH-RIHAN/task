import "./Signup.css"
import { Link } from "react-router-dom"
function Signup() {
  return (
    <div className="w-screen h-screen flex relative ">
        <img src={require("../../../public/images/big card.png")} alt="" />
        <div className="signupF w-[80%] h-screen rounded-l-[20px] absolute top-0 right-0 bg-white px-[200px] py-[75px] ">
            <div className="sf flex flex-col w-full  justify-between items-center ">
                <h2 className="font-bold text-color-5 mb-[30px]">أنشاء حساب</h2>
                    <form action="" className="flex flex-row-reverse justify-between items-center w-full">
                        <div className="c1 w-[45%] h-full">
                            
                            <div className=" relative">
                                <label htmlFor=" " className="absolute right-[23px] -top-[25%] bg-white px-1 text-[18px] font-normal">البريد الالكتروني</label>
                                <input type="email" name="" id="" className=" border-[1px] border-black w-[550px] h-[60px] rounded-[20px] text-center text-[20px]"/> 
                            </div>

                            <div className=" relative">
                                <label htmlFor=" " className="absolute right-[23px] -top-[25%] bg-white px-1 text-[18px] font-normal">اسم المستخدم </label>
                                <input type="text" name="" id="" className=" border-[1px] border-black w-[550px] h-[60px] rounded-[20px] text-center text-[20px]"/> 
                            </div>

                            <div className=" relative">
                                <label htmlFor=" " className="absolute right-[23px] -top-[25%] bg-white px-1 text-[18px] font-normal">رقم الهاتف </label>
                                <input type="number" name="" id="" className=" border-[1px] border-black w-[550px] h-[60px] rounded-[20px] text-center text-[20px]"/> 
                            </div>

                            <div className=" relative">
                                <label htmlFor=" " className="absolute right-[23px] -top-[25%] bg-white px-1 text-[18px] font-normal">كلمة المرور </label>
                                <input type="password" name="" id="" className=" border-[1px] border-black w-[550px] h-[60px] rounded-[20px] text-center text-[20px]"/> 
                            </div>

                            <div className=" relative">
                                <label htmlFor=" " className="absolute right-[23px] -top-[25%] bg-white px-1 text-[18px] font-normal">اعادة كلمة المرور </label>
                                <input type="password" name="" id="" className=" border-[1px] border-black w-[550px] h-[60px] rounded-[20px] text-center text-[20px]"/> 
                            </div>

                        </div>
                        <div className="c2  w-[45%] h-full flex flex-col justify-between ">
                            <label htmlFor="" className="ml-auto font-bold text-[18px] mb-[10px]">الصورة الشخصية</label>
                            <div className="file cursor-pointer pb-[20px] relative px-[20px] w-[550px] h-[150px] bg-[#6B48FF] bg-opacity-20 rounded-[20px] border-[2px] border-color-3 border-dashed flex flex-row items-center justify-between">
                                <p className=" absolute  bottom-[20px] right-[20px] text-gray-500 font-bold">2MB : الحجم الأقصى</p>
                                <img src={require("../../assets/upload.png")} alt="" className=" w-[60px] h-[60px]" />
                                <p className="text-[18px] font-bold">اسحب وافلت الصورة هنا او قم برفعها من الملفات</p>
                            </div>

                            <label htmlFor="الصورة الشخصية"></label>
                            <div className="file cursor-pointer pb-[20px] relative px-[20px] w-[550px] h-[150px] bg-[#6B48FF] bg-opacity-20 rounded-[20px] border-[2px] border-color-3 border-dashed flex flex-row items-center justify-between">
                                <p className=" absolute  bottom-[20px] right-[20px] text-gray-500 font-bold">1MB : الحجم الأقصى</p>
                                <img src={require("../../assets/upload.png")} alt="" className=" w-[60px] h-[60px]" />
                                <p className="text-[18px] font-bold">اسحب وافلت الصورة هنا او قم برفعها من الملفات</p>
                            </div>
                            <div className="bg-color-2 w-full h-[70px] cursor-pointer rounded-[20px] flex justify-center items-center font-bold text-[24px]">
                                إنشاء حساب
                            </div>
                            <div className="mm check flex min-w-[200px] ml-auto">
                                <Link to="/Login" className=" text-color-2  text-[18px] font-normal">تسجيل الدخول</Link>
                                <p className="text-black text-[18px] ml-[5px] font-normal">لديك حساب؟</p>
                            </div>
                        </div>

                    </form>

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
  )
}

export default Signup