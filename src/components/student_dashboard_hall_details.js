import vivek1 from "../assests/vivekanandha_audit_1.jpg";
import vivek2 from "../assests/vivekanandha_audit_2.jpeg";

function StudentHallBookingDetailsPage(props) {
    return (
        <div className="p-10 bg-zinc-100">
            <div className="text-3xl font-semibold text-green-700 mb-5">{props.data.hallName}</div>
            <div className="flex flex-wrap">
                <img src={vivek1} className="w-1/2 max-h-96 pr-2" alt="image1"></img>
                <img src={vivek2} className="w-1/2 max-h-96 pl-2" alt="image2"></img>
            </div>
            <div className="text-black font-bold text-2xl my-2">ABOUT :</div>
            <div className="text-justify">
                Vivekanandha Auditorium is located near the Mathematics Department. It is the main
                auditorium in the whole of CEG Campus and many events frequently happen here. It has
                a total capacity of 200 people. It also has a balcony which can gives an additional
                capacity of 50 people. This auditorium is totally under the control of Department of
                Mathematics. Also you need Dean’s approval to book this hall.
            </div>
            <button type="button" className="text-white bg-sky-500 hover:bg-sky-600 w-36 h-10 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm my-5">Book Hall</button>
        </div >
    );
}

export default StudentHallBookingDetailsPage;