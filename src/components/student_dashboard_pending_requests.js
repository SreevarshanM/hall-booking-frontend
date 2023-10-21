function StudentDashboardPendingRequests(props) {
    return (
        <div className="bg-neutral-100 w-full">
            <nav class="bg-white border-gray-200 dark:bg-gray-900">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div class="flex items-center flex-wrap">
                        <span class="self-center mr-4 text-md md:text-2xl font-bold whitespace-nowrap">REQUESTS : </span>
                        <ul class="font-medium mt-2 sm:mt-0 flex flex-wrap rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white">
                            <li className="flex items-center mr-2 text-sm sm:text-md">
                                <div className="h-4 w-6 bg-[#fe3233] mr-2"></div>
                                <div>Rejected</div>
                            </li>
                            <li className="flex items-center mr-2 text-sm sm:text-md">
                                <div className="h-4 w-6 bg-[#37b317] mr-2"></div>
                                <div>Approved</div>
                            </li>
                            <li className="flex items-center mr-2 text-sm sm:text-md">
                                <div className="h-4 w-6 bg-[#fea501] mr-2"></div>
                                <div>Pending</div>
                            </li>
                        </ul>
                    </div>

                    <div class="mt-2 lg:mt-0 w-full md:block md:w-auto" id="navbar-default">
                        <select id="email" class="bg-[#f8fafa] border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5" required>
                            <option>All</option>
                            <option>Department of Mathematics</option>
                            <option>Department of Computer Science</option>
                            <option>Department of Information Science and Technology</option>
                        </select>
                    </div>
                </div>
            </nav>

            <div className="p-4 sm:p-10">
                <ul>
                    <li className="p-2">
                        <div class="block w-full p-4 bg-[#37b317] rounded-lg shadow-lg hover:bg-[#31a314] hover:cursor-default">
                            <h5 class="mb-2 text-xl font-bold tracking-tight">LECTURE HALL ROOM NO. 85 | 22/08/2023 | 5.00 PM TO 6.00 PM</h5>
                            <div className="flex justify-between items-end">
                                <p class="font-normal text-black text-sm">
                                    <div>SREE VARSHAN (2021242019, Mathematics)</div>
                                    <div>Affiliated Department/Club: CSAU</div>
                                    <div>Reason : To conduct an event called "Resume Revamp" and use the projector there</div>
                                </p>
                                <div className="text-sm">
                                    <div>Submitted On :</div>
                                    <div>
                                        17/08/2023 13:04:46
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="p-2">
                        <div class="block w-full p-4 bg-[#fe3233] rounded-lg shadow-lg hover:bg-[#f0292a] hover:cursor-default">
                            <h5 class="mb-2 text-xl font-bold tracking-tight">LECTURE HALL ROOM NO. 83 | 24/08/2023 | 5.00 PM TO 5.30 PM</h5>
                            <div className="flex justify-between items-end">
                                <p class="font-normal text-black text-sm">
                                    <div>SREE VARSHAN (2021242019, Mathematics)</div>
                                    <div>Affiliated Department/Club: CSAU</div>
                                    <div>Reason : To conduct an event called "Resume Revamp" and use the projector there</div>
                                </p>
                                <div className="text-sm">
                                    <div>Submitted On :</div>
                                    <div>
                                        17/08/2023 13:04:46
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="p-2">
                        <div class="block w-full p-4 bg-[#fea501] rounded-lg shadow-lg hover:bg-[#f09c02] hover:cursor-default">
                            <h5 class="mb-2 text-xl font-bold tracking-tight">LECTURE HALL ROOM NO. 85 | 22/08/2023 | 5.00 PM TO 6.30 PM</h5>
                            <div className="flex justify-between items-end">
                                <p class="font-normal text-black text-sm">
                                    <div>SREE VARSHAN (2021242019, Mathematics)</div>
                                    <div>Affiliated Department/Club: CSAU</div>
                                    <div>Reason : To conduct an event called "Resume Revamp" and use the projector there</div>
                                </p>
                                <div className="text-sm">
                                    <div>Submitted On :</div>
                                    <div>
                                        17/08/2023 13:04:46
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default StudentDashboardPendingRequests;