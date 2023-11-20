import { useNavigate } from "react-router-dom";

export default function PopupModal({ setShowModal, message }) {
  const navigate = useNavigate();

  return (
    <div>
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*body*/}
              <div className="relative p-6 flex-auto">
                <p className="my-4 text-blueGray-500 text-xl text-center leading-relaxed px-20">
                  {message}
                </p>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-3 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-red-500 hover:bg-red-50 font-semibold px-4 py-2 text-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    </div>
  );
}
