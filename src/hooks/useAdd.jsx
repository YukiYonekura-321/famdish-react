import { useCallback, useState } from "react";

export const useAdd = () => {
  const [text, SetText] = useState("");
  const [array, setArray] = useState([]);   
  
  const handleChange = useCallback((event) => {
    if (event.target.value.length > 5) {
      alert("5文字以下で入力してください");
      return;
    }
    SetText(event.target.value.trim());
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (text === "") {
        alert("入力してください");
        return prevArray;
      }
      if (prevArray.includes(text)) {
        alert("同じ値が既に存在します");
        return prevArray;
      }
      return [...prevArray, text];
    });
  }, [text]);

  return { text, array, handleChange, handleAdd };
}