function Footer() {
  return (
    <footer
      className="decoration-white mt-auto"
      style={{ backgroundColor: "#151515" }}
    >
      <div className="w-full py-5 px-10 md:h-20 md:py-0 sm:px-20 flex items-center md:justify-between justify-center flex-wrap">
        <span className="text-m text-white text-center dark:text-white-400 mb-5 sm:mb-0 mr-5">
          Copyright © 2023
          <span className="hover:none font-bold">
            {" "}
            Campus Hall Booking System
          </span>
        </span>
        <span className="text-m text-white text-center dark:text-white-400">
          Developed by AU Web Team
        </span>
      </div>
    </footer>
  );
}

export default Footer;
