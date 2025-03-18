import { Link, NavLink } from "react-router"; //
import { HiOutlineSearch } from "react-icons/hi";
import { PiShoppingCart } from "react-icons/pi";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";

// const menus = [
//   {
//     id:1,
//     link:"/",
//     text:"Home"

//   },
//   {
//     id:1,
//     link:"/about",
//     text:"About"

//   },
//   {
//     id:1,
//     link:"/contact",
//     text:"Contact"

//   },
//   {
//     id:1,
//     link:"/pricing",
//     text:"Pricing"

//   },
//   {
//     id:1,
//     link:"/product",
//     text:"Product"

//   }

// ]



const ActiveStyle = ({ isActive }) => {
  return isActive
    ? "px-2 py-4 text-blue-500 text-[14px] leading-[24px] "
    : "px-2 py-4 text-white font-display text-[14px] leading-[24px] tracking-[0.2px]";
};
const menus = [
  {
    id:1,
    text:"Home",
    link:"/"
  },
  {
    id:2,
    text:"Product",
    link:"/product"
  },
  {
    id:3,
    text:"Pricing",
    link:"/pricing"
  },
  {
    id:4,
    text:"Contact",
    link:"/contact"
  },
]
function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className="bg-transparent w-full absolute left-0 top-0 z-50 py-6">
      <div className="container">
        <div className="grid grid-cols-[auto_1fr_auto] md:grid-cols-[180px_1fr_auto] items-center justify-end gap-3">
          {/* logo */}
          <div className="">
            <img src="Logo.png" alt="image of logo" />
          </div>
          {/* lg navbar */}
          <div className="hidden md:flex gap-10 items-center justify-end">
            <ul className="flex gap-[30px] items-center">
              <NavLink to={"/"} className={ActiveStyle}>
                Home
              </NavLink>
              <NavLink to={"/pricing"} className={ActiveStyle}>
                Pricing
              </NavLink>
              <NavLink to={"/product"} className={ActiveStyle}>
                Product
              </NavLink>
              <NavLink to={"/contact"} className={ActiveStyle}>
                Contact
              </NavLink>
            </ul>
            
          </div>
          <div>
          <div className="flex pr-5 items-center  justify-end gap-4">
              <button>
                <HiOutlineSearch className="text-white" />
              </button>
              <button>
                <PiShoppingCart className="text-white" />
              </button>
            </div>
          </div>
          <div className="md:hidden text-white items-center pt-2">
            <button onClick={()=> setShowMenu(!showMenu)} className="text-3xl">
              <BiMenuAltRight />
            </button>
          </div>
        </div>
      </div>
      {/* popoup nav */}
      {showMenu && <div>
        <ul className="md:hidden absolute top-[87px] left-0 w-full bg-[rgba(55,64,64,0.96)] px-4 py-10 text-center flex flex-col gap-6 transition-all duration-1000">
         {menus?.map((item)=> <MenuItem key={item.id} link={item.link} text={item.text}  />)}
        </ul>
      </div>}
    </nav>
  );
}

export default Navbar;


function MenuItem ({link, text}) {
  return (
    <li>
      <Link className="text-[30px] leading-[45px] text-white font-bold" to={link}>{text}</Link>
      </li>  
  )
}
// const MenuItem = ({ text, link }) => {
//   return (
//     <li className="px-2 py-4 text-white font-display text-[14px] leading-[24px] tracking-[0.2px] ">
//       <NavLink to={link}>{text}</NavLink>
//     </li>
//   );
// };
