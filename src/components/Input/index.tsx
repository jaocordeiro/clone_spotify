"use client";

import { useEffect, useRef, useState } from "react";
import SearchIcon from "../Svgs/Search";

const InputSearch = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const boxInput = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = ({ target }: MouseEvent) => {
      const isClickInsideInput = boxInput.current?.contains(target as Node);
      if (!isClickInsideInput && open) setOpen(false);
    };

    const html = document.querySelector("html");
    html?.addEventListener("click", handleClickOutside);

    return () => {
      html?.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  const handleOpenSearch = () => setOpen(!open);

  const clearValue = () => setValue("");

  return (
    <div
      ref={boxInput}
      className={`flex relative pr-1 ${
        open ? "bg-[#ffffff1a] rounded-md animate-entry" : ""
      } `}
    >
      <button
        type="button"
        className="h-8 w-8 hover:bg-[#ffffff1a] rounded-full"
        onClick={handleOpenSearch}
      >
        <SearchIcon className="h-4 w-full" />
      </button>
      {open && (
        <label>
          <input
            type="text"
            placeholder="Buscar música"
            className="w-full outline-none border-0 bg-transparent absolute h-full left-0 pl-8 pr-6"
            value={value}
            onChange={({ target }) => setValue(target.value)}
          />
          {value && (
            <button
              type="button"
              className="absolute right-1 text-xl z-10"
              onClick={clearValue}
            >
              &times;
            </button>
          )}
        </label>
      )}
    </div>
  );
};

export default InputSearch;
