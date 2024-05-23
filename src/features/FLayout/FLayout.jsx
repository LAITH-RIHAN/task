import "./FLayout.css"

function FLayout() {
  return (
    <div className="flayout h-screen w-full flex ">
        <div className="card  m-auto max-w-[1000px] flex flex-row rounded-[20px] relative ">
            <img src={require("../../../public/images/card.png")} alt=""  className="w-[100%]    z-0 rounded-[20px] "/>
            <div className="fspace w-[68%]  z-10 bg-color-1 rounded-[20px] absolute top-0 right-[0px] h-full">

            </div>
        </div>
    </div>
  )
}

export default FLayout