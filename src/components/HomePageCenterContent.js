function home_page_center_content() {

    var textShadow = {
        textShadow: "5px 5px 10px rgba(80, 80, 80, 0.75)"
    }

    return (
        <div class="text-xs sm:text-base">
            <div class="flex flex-wrap items-center p-2 sm:p-10">
                <div class="sm:w-6/12 w-full px-5 sm:px-16 mt-5 sm:mt-0">
                    <div class="text-3xl sm:text-5xl font-bold text-gray-700" style={textShadow}>
                        HALL BOOKING
                    </div>
                    <div class=" text-base sm:text-xl font-semibold text-gray-800 mt-5 sm:mt-8">HALLS AVAILABLE FOR BOOKING</div>
                    <div class="mt-5">
                        <a class="text-blue-600 hover:underline hover:cursor-pointer">click here</a>
                        <span> to check availability of halls</span>
                    </div>
                    <ol class="list-decimal ml-5 mt-5">
                        <li>Drawing Hall 48</li>
                        <li>Drawing Hall 49</li>
                        <li>Lecture Hall (No. 82, 83, 84, 85, 13)</li>
                        <li>Science and Humanities Room (Room No. -,-,-)</li>
                        <li>Knowledge Park (Room No. -,-,-)</li>
                        <li>Srinivasa Ramanujan Hall</li>
                        <li>Henry Moseley Hall</li>
                        <li>Ada Lovelace Auditorium</li>
                        <li>Turing Hall</li>
                        <li>Vivekanandha Auditorium</li>
                        <li>Tag Auditorium</li>
                        <li>Hall of Guines-68</li>
                    </ol>
                </div>
                <div class="sm:w-6/12 w-full p-5 sm:p-10">
                    <div class="bg-sky-200 p-5 sm:p-10 border border-4 border-black">
                        <div class="text-gray-800 font-bold text-xl">STEPS TO BOOK A HALL</div>
                        <ul class="list-disc ml-5 mt-5">
                            <li><a class="text-blue-600 hover:underline hover:cursor-pointer">click here</a> to login</li>
                            <li>Check the calendar for availability of the halls on specific dates</li>
                            <li>Click "Add new request" and fill in the form and submit</li>
                            <li>You will receive an email upon submitting this form and an email after request is approved</li>
                            <li>Meanwhile the status of your record can be tracked from your dashboard</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default home_page_center_content;