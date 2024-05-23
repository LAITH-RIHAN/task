import { Link } from "react-router-dom";
import "./Navbar.css"
import  "./toggle.css";
import { useState } from "react";
// import Link from "react-router-dom"

export default function Navbar () {
    const [isChanged, setIsChanged] = useState(false);
    function myFunction() {
        setIsChanged(!isChanged);
      }


  return (
    <div className="nn bg-color-1">
        <div className="container flex justify-between items-center h-[10vh] bg-color-1 w-full ">
            <div className="navbuttons flex flex-row-reverse items-center justify-between w-auto ">
                <div className="link w-[143px] h-[33px] text-center border-color-4 text-color-4  bg-color-1 border-[1px] rounded-[5px] sm:hidden xsm:hidden"><Link to="/login">سجل دخول</Link></div>
                <div className="link  w-[65px] h-[33px] text-center bg-color-4 text-color-2 border-[1px] rounded-[5px] mr-[10px] sm:hidden  xsm:hidden"><Link to="/signup" >ابدأ</Link></div>
            </div>
            <div className="nav flex flex-row-reverse items-center xsm:mr-auto sm:mr-auto sm:w-full xsm:w-full sm:justify-between xsm:justify-between ">
                
                {/* toggle */}
                <div className={`container1 ${isChanged ? 'change' : ''}   pr-[20px]       md:hidde lg:hidden xl:hidden 2xl:hidden `}    onClick={myFunction}  >
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>

                {/* toggle */}
                <img src={require("../../../src/assets/Logo.png")} alt="" className=" max-w-[220px] pl-[50px] xsm:px-0 sm:px-0 md:mr-[200px]"  />
                <ul className="md:hidden sm:hidden xsm:hidden flex items-center justify-between mr-2 max-w-[550px] min-w-[500px]  text-color-4 ">
                    <Link to=""><p> العقارات</p></Link>
                    <Link to=""><p> برامج الجنسية</p></Link>
                    <Link to=""><p> البيع</p></Link>
                    <Link to=""><p> المزيد</p></Link>
                    <Link to="/"><p> حول</p></Link>
                </ul>
            </div>
        </div>
    </div>
  )
}
