import { useCallback } from "react";

export const useclickAlert = () => {
  const handleClick = useCallback(() => {
    alert("クリック！！");
  }, []);
  return handleClick;
};