import CEG_main_logo from '../assests/CEG_main_logo.png';
import ceg from '../assests/ceg.jpeg';
import HomePageHeader from './HomePageHeader';

function Header() {
    var backgroundStyle = {
        backgroundImage: 'url(' + ceg + ')',
        backgroundSize: 'cover',
        backgroundPosition: "center",
        backgroundRepeat: 'no-repeat'
    };

    return (
        <header style={backgroundStyle} class="shadow-stone-400 shadow-lg">
            < nav class="bg-black/75 py-5 dark:bg-gray-800 px-3 sm:px-10" >
                <div class="flex flex-wrap justify-between items-center">
                    <div class="flex items-center">
                        <img src={CEG_main_logo} class="mr-3 h-20 sm:h-24" />
                        <span class="self-center text-white whitespace-normal">
                            <div class="font-bold sm:text-2xl">COLLEGE OF ENGINEERING, GUINDY</div>
                            <div class="font-semibold sm:text-xl">Anna University, Chennai</div>
                            <div class="font-thin">AISHE Code : C-25072</div>
                        </span>
                    </div>
                    <div class="flex items-center">
                        <div class="text-white font-bold text-3xl max-[907px]:mt-5 max-[907px]:text-center">Campus Hall Booking</div>
                    </div>
                </div>
            </nav >
        </header >
    );
}

export default Header;
