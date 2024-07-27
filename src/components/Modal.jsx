import { HiMiniXMark } from "react-icons/hi2";
import { createPortal } from "react-dom";
const Modal = ({ onClose, title, children }) => {
  const content = (
    <div
      id="popup-modal"
      className="bg-[rgba(0,0,0,0.1)] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow ">
          <div className="flex items-center justify-between p-4 pb-0">
            <h4 className="md:text-lg text-base text-gray-900 font-semibold">
              {title}
            </h4>
            <button
              type="button"
              className=" text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
              onClick={(e) => {
                e.preventDefault();
                onClose();
              }}
            >
              <HiMiniXMark className="w-6 h-6 text-gray-950" />
            </button>
          </div>
          <div className="p-2 md:p-3 text-center ">
            <div className="mt-3">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
  return createPortal(content, document.getElementById("root-modal"));
};

export default Modal;
