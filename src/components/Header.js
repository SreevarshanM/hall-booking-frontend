import CEG_main_logo from "../assests/CEG_main_logo.png";
import ceg from "../assests/ceg.jpeg";
import HomePageHeader from "./HomePageHeader";

function Header(props) {
  var backgroundStyle = {
    backgroundImage: `url${ceg}`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <header style={backgroundStyle} className="shadow-stone-400 shadow-lg">
      <nav nav className="bg-black/75 py-5 dark:bg-gray-800 px-3 sm:px-10">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex items-center">
            <img src={CEG_main_logo} className="mr-3 h-20 sm:h-24" />
            <span className="self-center text-white whitespace-normal">
              <div className="font-bold sm:text-2xl">
                COLLEGE OF ENGINEERING, GUINDY
              </div>
              <div className="font-semibold sm:text-xl">
                Anna University, Chennai
              </div>
              <div className="font-thin">AISHE Code : C-25072</div>
            </span>
          </div>
          <div className="flex items-center">
            <div className="text-white font-bold text-3xl max-[907px]:mt-5 max-[907px]:text-center">
              Campus Hall Booking
            </div>
          </div>
        </div>
        {props.data.flag && <HomePageHeader />}
      </nav>
    </header>
  );
}

export default Header;
