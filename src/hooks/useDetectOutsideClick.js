import { useState, useEffect } from "react";

export const useDetectOutsideClick = (el, initialState) => {
  const [listOpen, setListOpen] = useState(initialState);

  useEffect(() => {
    const pageClickEvent = (e) => {
      console.log(el.current);
      if (el.current !== null && !el.current.contains(e.target)) {
        setListOpen(!listOpen);
      }
    };

    if (listOpen) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [listOpen, el]);

  return [listOpen, setListOpen];
};
