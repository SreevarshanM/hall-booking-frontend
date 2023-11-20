import { useState, useEffect } from "react";

function HomePageHeader() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav className="mt-5">
      <div className="">
        {(toggleMenu || screenWidth > 768) && (
          <div className="flex flex-wrap items-center justify-between p-1">
            <div className="w-full md:block md:w-auto" id="navbar-default">
              <ul className="gap-3 font-medium text-white flex flex-col p-4 items-center md:p-0 mt-4 md:flex-row md:space-x-8">
                <li>
                  <a href="/" className="">
                    <i className="fa-solid fa-house text-3xl"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="/calendar"
                    className="hover:underline hover:underline-offset-4"
                  >
                    CALENDAR
                  </a>
                </li>
                <li>
                  <a
                    href="/admin_login"
                    className="hover:underline hover:underline-offset-4"
                  >
                    ADMIN
                  </a>
                </li>
                <li>
                  <a
                    href="/hall_details"
                    className="hover:underline hover:underline-offset-4"
                  >
                    HALL DETAILS
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:block md:w-auto" id="navbar-default">
              <ul className="gap-3 font-medium text-white flex flex-col items-center md:p-0 md:mt-4 md:flex-row md:space-x-4">
                <li>
                  <a href="/register" className="hover:font-bold">
                    REGISTER
                  </a>
                </li>
                <div className="hidden md:block">|</div>
                <li>
                  <a href="/login" className="hover:font-bold">
                    LOGIN
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={toggleNav}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5 text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default HomePageHeader;
