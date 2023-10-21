function StudentDashboardNavbar({ listAdd, childToParent }) {
    const leng = listAdd.length;
    const first = listAdd.slice(0, leng - 1);
    const last = listAdd[leng - 1];

    const data = false;

    return (
        <div class="bg-neutral-100 w-full text-base">
            <nav class="flex h-16 pl-5 bg-white" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-2">
                    {first.map(item =>
                        <li class="inline-flex items-center">
                            <button onClick={() => childToParent([listAdd, item])} class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
                                {item}
                                <svg class="w-3 h-3 text-gray-400 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                            </button>
                        </li>
                    )}
                    <li class="inline-flex items-center">
                        <button disabled class="inline-flex items-center text-sm font-medium text-gray-700">
                            {last}
                        </button>
                    </li>
                </ol>
            </nav>
        </div>
    );
}

export default StudentDashboardNavbar;