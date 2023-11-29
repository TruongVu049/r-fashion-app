import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
const Message = ({ content }) => {
  const [show, setShow] = useState(true);

  // On componentDidMount set the timer
  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setShow(false);
    }, 1000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  // If show is false the component will return null and stop here
  if (!show) {
    return null;
  }

  // If show is true this will be returned
  return (
    <div
      className={`
    fixed top-0 left-0 bottom-0 right-0 z-[999]  w-full   p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
    >
      <div className="rounded-lg relative p-3 z-[999] w-full max-w-md max-h-full bg-[rgba(0,0,0,0.6)] top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
        <div className="relative  p-4 rounded-lg">
          <div className="flex flex-col gap-3 items-center justify-center text-lg p-4">
            <span className="md:text-8xl sm:text-7xl text-5xl text-white">
              <AiOutlineCheckCircle className="bg-green-600 rounded-[50%]" />
            </span>
            <h2 className="text-white sm:text-lg text-base">{content}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
