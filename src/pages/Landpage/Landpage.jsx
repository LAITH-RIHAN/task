import "./Landpage.css"

function Landpage () {
  
  return (
    <div className="h-[75vh] relative">
    <div className="landp h-full ">
        <div className="container flex justify-center text-center xsm:pt-[20px]">
            <div className="textbox max-w-[925px] flex justify-center flex-col items-center pt-[50px] sm:m-[60px]">
                <p className="max-w-[560px] text-color-2 mb-[45px] sm:text-[22px] xsm:text-[18px]">أحصل على الإقامة التركية بكل سهولة مع Assetify</p>
                <h1 className="text-color-1 sm:text-[35px] xsm:text-[30px]">استثمر من أي مكان في العالم واحصل على الإقامة التركية</h1>
                <p className="max-w-[560px] text-color-2 mt-[45px] xsm:text-[18px]">استمتع بمجموعة من الفوائد عن طريق استثمار الحد الأدنى 200,000 دولار أمريكي من خلال منصتنا.</p>
            </div>
        </div>
    </div>
    <div className="plus bg-color-5 h-[14vh] flex justify-center pt-[20px]">
        <h1 className=" text-color-1 sm:text-[35px] xsm:text-[20px] xsm:mt-[15px] "> Assetify + قم بالإرتقاء تلقائياً إلى فئة </h1>
    </div>
    </div>
  )
}

export default Landpage