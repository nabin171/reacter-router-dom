import { useState } from "react";

export default function useCustomState(initialValue) {
  const [value, setValue] = useState(initialValue);
  return [value, setValue];
}
