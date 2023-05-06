import PlayIcon from "../Svgs/Play";

const ButtonPlay = () => {
  return (
    <button className="absolute right-4 w-12 h-12 flex items-center justify-center p-2 rounded-full bg-green-400 text-black ml-auto invisible group-hover:visible">
      <PlayIcon fill="#000" />
    </button>
  );
};

export default ButtonPlay;
