import "./Logout.css"
function Logout() {
  return (
    <div>
        <div className="flayout h-screen w-full flex ">
        <div className="card  m-auto w-[1000px] flex flex-row rounded-[20px] relative h-[450px] ">
            <img src={require("../../../public/images/card.png")} alt=""  className="w-[100%]    z-0 rounded-[20px] "/>
            <div className="fspace w-[68%]  z-10 bg-color-1 rounded-[20px] absolute top-0 right-[0px] h-full flex flex-col justify-center items-center">
                <h2 className="pt-[25px] font-bold"> هل انت متأكد من تسجيل الخروج؟</h2>
                <div className="w-[550px] h-[60px] bg-color-2 text-[24px] rounded-[20px] mt-[50px] text-center pt-[10px] font-bold">تأكيد</div>
                <div className="w-[550px] h-[60px] border-color-[#D9D9D9] border-[1px] bg-white text-[24px] rounded-[20px] mt-[35px] text-center pt-[5px] font-bold">تراجع</div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Logout