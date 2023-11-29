import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
const Counter = ({ limit }) => {
  const [counter, setCounter] = useState(1);

  let hasPrev = counter > 1;
  let hasNext = counter < limit;

  function handlePrevClick() {
    if (hasPrev) {
      setCounter(counter - 1);
    }
  }

  function handleNextClick() {
    if (hasNext) {
      setCounter(counter + 1);
    }
  }
  return (
    <label className="cursor-pointer md:w-[30%] sm:w-[40%] w-[50%] grid grid-cols-3  border-solid border border-secondColor">
      <button
        onClick={(e) => {
          e.preventDefault();
          if (hasPrev) {
            setCounter(counter - 1);
          }
        }}
        disabled={!hasPrev}
        className={`text-center  p-2 mx-auto text-lg font-semibold cursor-pointer
     
      `}
      >
        <BiMinus
          className={`${
            !hasPrev ? "opacity-20" : "duration-200 hover:text-primaryColor"
          }`}
        />
      </button>
      <input
        type="text"
        name="quantity"
        value={counter}
        onChange={(e) => {}}
        className=" border-x border-secondColor text-center cursor-pointer font-bold outline-none"
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          handleNextClick();
        }}
        disabled={!hasNext}
        className={`text-center p-2 mx-auto text-lg font-semibold cursor-pointer
      `}
      >
        <BiPlus
          className={`${
            !hasNext ? "opacity-20" : "duration-200 hover:text-primaryColor"
          }`}
        />
      </button>
    </label>
  );
};

export default Counter;
