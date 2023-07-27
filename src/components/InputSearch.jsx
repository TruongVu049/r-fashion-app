import { forwardRef, useRef, useImperativeHandle } from "react";
const InputSearch = forwardRef(function MyInput({
  props,
  ref,
  onKey,
  onSearch,
  valueSearch,
}) {
  const inputRef = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef.current.focus();
        },
      };
    },
    []
  );
  return (
    <>
      <label htmlFor="search">
        <input
          ref={inputRef}
          onKeyDown={onKey}
          onChange={onSearch}
          value={valueSearch}
          className={`w-full border-[#dee2e6] border-[1px] border-solid p-[5.5px] 
                      }`}
          placeholder="Tìm kiếm sản phẩm ..."
        />
      </label>
    </>
  );
});

export default InputSearch;
