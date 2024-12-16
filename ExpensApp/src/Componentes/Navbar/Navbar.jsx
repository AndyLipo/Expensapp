import logo from './LogoNav.svg'
export const Navbar = () => {
  return (
    <>
    <nav className="h-full flex justify-center items-center bg-[#76B1AC] p-4 w-full max-w-full">
      <ul className="">
        <li>
          <a href="" className="block">
            <img 
              src={logo} 
              alt="imagen-logo" 
              className="h-10 w-auto " 
            />
          </a>
        </li>
      </ul>
    </nav>
    </>
  )
}
