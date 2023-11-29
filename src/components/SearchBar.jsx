import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const [isShow, setIsShow] = useState(false);
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();
  function handleShow() {
    setIsShow((prevIsShow) => {
      setSearch("");
      return !prevIsShow;
    });
  }

  function postSearch() {
    setIsShow(!isShow);
    return navigate(`/product?search=${search}`);
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      postSearch();
    }
  };

  useEffect(() => {
    function handleFocus() {
      inputRef.current.focus();
    }
    if (isShow) handleFocus();
  }, [isShow]);
  // console.log("render search");
  return (
    <div>
      <div
        onClick={handleShow}
        className="p-[10px] hover:text-primaryColor duration-300"
      >
        <FaSearch />
      </div>
      <div
        className={` top-[88px] left-0 right-0 ${
          isShow ? "fixed" : "hidden"
        } animate-animationFadeDown z-50`}
      >
        <div className="container mx-auto">
          <div
            className="relative  flex p-3 rounded-[5px] sm:mx-[40px] mx-[20px]
         shadow-[0px_5px_15px_rgba(0,0,0,0.35)]
         flex items-center gap-x-[10px] content-stretch bg-while10Color 
        "
          >
            <div className="w-[90%]">
              {isShow && (
                <label htmlFor="search">
                  <input
                    ref={inputRef}
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    className={`w-full border-[#dee2e6] border-[1px] border-solid p-[5.5px] 
                  }`}
                    placeholder="Tìm kiếm sản phẩm ..."
                  />
                </label>
              )}
            </div>
            <div
              onClick={postSearch}
              className="w-[10%] text-center h-full bg-primaryColor content-stretch p-[10px] rounded-[6px] duration-300 hover:bg-secondColor"
            >
              <FaSearch className="text-while10Color mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
