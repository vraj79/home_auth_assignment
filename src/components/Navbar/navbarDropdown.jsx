export default function NavbarDropdown({ isOpen }) {
  return (
    <div
      className={`${
        isOpen ? "translate-y-0" : "-translate-y-full"
      } pt-[75.55px] md:hidden bg-tertiary-300 absolute top-0 left-0 w-full h-screen text-center transition-all duration-500 ease-in-out p-5 z-10`}
    >
      <div className="flex flex-col gap-16 mt-16">
        <div className="flex flex-col gap-8 items-center text-black-200">
          <a className="w-fit" href="#">
            <p className="navlink active-navlink font-mono">Home</p>
          </a>
          <a className="w-fit" href="#">
            <p className="navlink">Officers</p>
          </a>
          <a className="w-fit" href="#">
            <p className="navlink">Sections</p>
          </a>
          <a className="w-fit" href="#">
            <p className="navlink">Students</p>
          </a>
          <a className="w-fit" href="#">
            <p className="navlink">Academics</p>
          </a>
        </div>
        
      </div>
    </div>
  );
}
