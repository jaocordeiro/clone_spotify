import Image from "next/image";
import ChevronLeftIcon from "../Svgs/ChevronLeft";
import ChevronRightIcon from "../Svgs/ChevronRight";
import PersonIcon from "../Svgs/Person";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-yellow-400 bg-opacity-10 backdrop-blur-xl h-16 w-full">
      <div className="flex items-center gap-3">
        <button className="rounded-full bg-sfBlackLight p-2">
          <ChevronLeftIcon fill="#c3c3c3" height={20} width={20} />
        </button>
        <button className="rounded-full bg-sfBlackLight p-2">
          <ChevronRightIcon fill="#c3c3c3" height={20} width={20} />
        </button>
      </div>
      <div className="w-11 h-11 rounded-full bg-sfGrey flex items-center justify-center">
        <PersonIcon />
      </div>
    </header>
  );
};

export default Header;
