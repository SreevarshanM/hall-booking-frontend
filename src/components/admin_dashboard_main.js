function AdminDashboardMain() {
    return (
        <div className="p-5 md:p-10 md:pl-16 pb-20 bg-neutral-100 w-full text-base">
            <div className="text-4xl font-bold mb-5">
                HALLS BOOKING
            </div>
            <div>
                <a className="text-sky-500 hover:underline hover:cursor-pointer" href="/admin/dashboard/pending_requests">click here</a> to check the pending requests.
                <br></br>
                Folowing halls were assigned to you,
                <ol className="m-6 list-decimal ">
                    <li>Drawing Hall No. 48</li>
                    <li>Drawing Hall No. 49</li>
                    <li>Lecture Hall No. 82</li>
                    <li>Lecture Hall No. 83</li>
                    <li>Lecture Hall No. 84</li>
                    <li>Lecture Hall No. 13</li>
                </ol>

                <div className="font-bold mb-5">Steps to reply a request : </div>
                <ul className="ml-6 list-disc">
                    <li>Check the calendar for the availability of the halls on specific dates</li>
                    <li>Check the form submitted and Click "Approve" or "Deny"</li>
                    <li>You will receive an email upon responding the form.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default AdminDashboardMain;