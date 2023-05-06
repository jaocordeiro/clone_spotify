import Image from "next/image";
import ShufferIcon from "../Svgs/Shuffer";
import ChevronLeftIcon from "../Svgs/ChevronLeft";
import ChevronRightIcon from "../Svgs/ChevronRight";
import RepeatIcon from "../Svgs/Repeat";
import PlayIcon from "../Svgs/Play";
import MicrophoneIcon from "../Svgs/Microphone";
import ListIcon from "../Svgs/List";
import ShareIcon from "../Svgs/Share";
import ExpandIcon from "../Svgs/Expand";
import HighVolumeIcon from "../Svgs/HighVolume";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-sfBlackLight border-t border-gray-900 p-3 flex text-white items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src="/assets/jm.png"
          alt="Album tocando"
          width={56}
          height={56}
        />
        <div className="flex flex-col">
          <strong className="font-normal">Sertanejo</strong>
          <span className="text-xs text-zinc-400">Jorge e Mateus</span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-4">
          <ShufferIcon className="hover:bg-zinc-600 rounded-full cursor-pointer" />
          <ChevronLeftIcon
            fill="#c3c3c3"
            height={20}
            width={20}
            className="hover:bg-zinc-600 rounded-full cursor-pointer"
          />

          <button className="w-12 h-12 flex items-center justify-center hover:bg-zinc-600 rounded-full cursor-pointer">
            <PlayIcon fill="#c3c3c3" height={25} width={25} />
          </button>

          <ChevronRightIcon
            fill="#c3c3c3"
            height={20}
            width={20}
            className="hover:bg-zinc-600 rounded-full cursor-pointer"
          />
          <RepeatIcon
            fill="#c3c3c3"
            height={20}
            width={20}
            className="hover:bg-zinc-600 rounded-full cursor-pointer"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:48</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600">
            <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
          </div>
          <span className="text-xs text-zinc-400">1:42</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <MicrophoneIcon
          fill="#c3c3c3"
          height={20}
          width={20}
          className="hover:bg-zinc-600 rounded-full cursor-pointer"
        />
        <ListIcon
          fill="#c3c3c3"
          height={20}
          width={20}
          className="hover:bg-zinc-600 rounded-full cursor-pointer"
        />
        <ShareIcon
          fill="#c3c3c3"
          height={20}
          width={20}
          className="hover:bg-zinc-600 rounded-full cursor-pointer"
        />
        <div className="flex items-center gap-2">
          <HighVolumeIcon
            fill="#c3c3c3"
            height={20}
            width={20}
            className="hover:bg-zinc-600 rounded-full cursor-pointer"
          />
          <div className="h-1 rounded-full w-24 bg-zinc-600">
            <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
          </div>
        </div>
        <ExpandIcon
          fill="#c3c3c3"
          height={20}
          width={20}
          className="hover:bg-zinc-600 rounded-full cursor-pointer"
        />
      </div>
    </footer>
  );
};

export default Footer;
