function HomePageHeader() {
    return (
        <nav class="mt-5">
            <div class="flex flex-wrap items-center justify-between p-1">
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="font-medium text-white flex flex-col p-4 items-center md:p-0 mt-4 md:flex-row md:space-x-8">
                        <li>
                            <a href="#" class=""><i class="fa-solid fa-house text-3xl"></i></a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline hover:underline-offset-4">CALENDAR</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline hover:underline-offset-4">ADMIN</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline hover:underline-offset-4">HALL DETAILS</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline hover:underline-offset-4">ABOUT</a>
                        </li>
                    </ul>
                </div>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="font-medium text-white flex flex-col items-center md:p-0 mt-4 md:flex-row md:space-x-4">
                        <li>
                            <a href="#" class="hover:font-bold">REGISTER</a>
                        </li>
                        <a>|</a>
                        <li>
                            <a href="#" class="hover:font-bold">LOGIN</a>
                        </li>
                    </ul>
                </div>
                <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}

export default HomePageHeader;