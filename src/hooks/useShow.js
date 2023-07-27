import { useState } from "react";

export function useShow(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange() {
    setValue(!value);
  }
  const inputProps = {
    value: value,
    onChange: handleChange,
  };

  return inputProps;
}
