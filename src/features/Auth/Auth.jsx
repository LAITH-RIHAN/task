import "./Auth.css"
function Auth() {
    let x="Laith"
    let y="laith@gmail.com"
    let z= "3:00";
  return (
    <div className=" absolute top-0 right-0 w-screen h-screen">
        <div className="flayout h-screen w-full flex ">
        <div className="card  m-auto w-[1000px] flex flex-row rounded-[20px] relative h-[850px] ">
            <img src={require("../../../public/images/card.png")} alt=""  className="w-[100%]    z-0 rounded-[20px] "/>
            <div className="fspace w-[68%]  z-10 bg-white rounded-[20px] absolute top-0 right-[0px] h-full flex flex-col justify-center items-center">
                <form action="" className="flex flex-col h-[70%] w-[550px] justify-between items-center">
                    <div className="tex flex flex-row-reverse">
                        <h2 className="font-bold ml-[20px] "> مرحبا بك </h2>
                         <h2 className="font-bold text-color-3">{x}</h2>
                    </div>

                    <div className="tt text-[26px] flex flex-row-reverse">
                        <p> : لقد تم ارسال رمز التأكيد الى</p>
                        <p className="text-color-3 font-bold mr-[5px]">{y}</p>
                    </div>
                    <form action="" className="auth flex flex-row justify-between items-center w-[80%] ">
                        <input type="text" name="" maxLength={1} id="" className="w-[60px] h-[60px] border-[1px] border-gray-500 text-center text-[28px] rounded-[20px] " />
                        <input type="text" name="" maxLength={1} id="" className="w-[60px] h-[60px] border-[1px] border-gray-500 text-center text-[28px] rounded-[20px] " />
                        <input type="text" name="" maxLength={1} id="" className="w-[60px] h-[60px] border-[1px] border-gray-500 text-center text-[28px] rounded-[20px] " />
                        <input type="text" name="" maxLength={1} id="" className="w-[60px] h-[60px] border-[1px] border-gray-500 text-center text-[28px] rounded-[20px] " />
                        <input type="text" name="" maxLength={1} id="" className="w-[60px] h-[60px] border-[1px] border-gray-500 text-center text-[28px] rounded-[20px] " />
                        <input type="text" name="" maxLength={1} id="" className="w-[60px] h-[60px] border-[1px] border-gray-500 text-center text-[28px] rounded-[20px] " />
                    </form>
                    <button type="submit" className="w-[550px] h-[60px] bg-color-2 text-[24px] rounded-[20px] mt-[0px] text-center pt-[0px] font-bold"> تأكيد</button>
                    <div className="tt text-[26px] flex flex-row-reverse">
                        <p>اذا لم يصلك الرمز يمكنك اعادة المحاولة بعد</p>
                        <p className="text-color-3 font-bold mr-[5px]">{z}</p>
                    </div>
                    <button type="submit" className="w-[550px] h-[60px] bg-white border-[1.5px] border-black text-[24px] rounded-[20px] mt-[0px] text-center pt-[0px] font-bold"> إعادة الارسال</button>

                </form>
                
                
            </div>
        </div>
    </div>
    </div>
  )
}

export default Auth