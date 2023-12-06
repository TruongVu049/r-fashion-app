import React, { forwardRef, useImperativeHandle, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { HiXMark } from "react-icons/hi2";
const Notification = forwardRef((props, ref) => {
  const [notify, setNotify] = useState({
    status: null,
    mes: "",
  });
  useImperativeHandle(ref, () => ({
    show(status, mes) {
      setNotify({
        status: status,
        mes: mes,
      });
      setTimeout(() => {
        setNotify({
          status: null,
          mes: "",
        });
      }, 1500);
    },
  }));
  return (
    <div
      className={` ${notify.status ? "block" : "hidden"}
    fixed top-0 left-0 bottom-0 right-0 z-[999]  w-full h-full`}
    >
      <div
        className="
        flex items-center flex-col
        text-center
      bg-[rgba(0,0,0,0.65)]
  
      rounded-lg relative p-3 z-[999] w-full max-w-md max-h-full bg-white top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]"
      >
        <div
          className={`${
            notify.status ? "bg-[#4ade80]" : "bg-[#ef4444]"
          }  rounded-[50%] p-4`}
        >
          {notify.status ? (
            <AiOutlineCheck className="text-while10Color sm:text-6xl text-2xl font-semibold" />
          ) : (
            <HiXMark className="text-while10Color sm:text-6xl text-2xl font-semibold" />
          )}
        </div>
        <h2 className="text-while10Color mt-2 sm:text-xl text-lg">
          {notify.mes}
        </h2>
      </div>
    </div>
  );
});

export default Notification;
