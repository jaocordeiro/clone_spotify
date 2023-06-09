import Link from "next/link";
import InputSearch from "@/components/Input";
import Image from "next/image";

interface MocksType {
  mockNavigation: {
    name: string;
    icon: string;
  }[];
  mockLibrary: {
    sound: string;
    img: string;
    playlist: string;
  }[];
}

const Navigation = ({ mockNavigation, mockLibrary }: MocksType) => {
  return (
    <>
      <nav className="space-y-4">
        {mockNavigation.map((item) => (
          <Link href="" key={item.name} className="flex items-center">
            <div className="mr-3">
              <Image width={24} height={24} src={item.icon} alt={item.name} />
            </div>
            <p className="text-base">{item.name}</p>
          </Link>
        ))}
      </nav>
      <nav className="mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-3">
        <div className="flex gap-2">
          <div className="rounded-full w-1/3 h-6 text-xs text-white bg-sfGrey flex items-center justify-center">
            Playlist
          </div>
          <div className="rounded-full w-1/3 h-6 text-xs text-white bg-sfGrey flex items-center justify-center">
            Artista
          </div>
          <div className="rounded-full w-1/3 h-6 text-xs text-white bg-sfGrey flex items-center justify-center">
            Música
          </div>
        </div>
        <InputSearch />
        {mockLibrary.map((item) => (
          <Link href="" key={item.img} className="flex">
            <Image
              width={48}
              height={48}
              src={item.img}
              alt=""
              className="mr-3"
            />
            <div className="">
              <p className="text-white text-sm">{item.sound}</p>
              <p className="text-xs text-gray-400">{item.playlist}</p>
            </div>
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Navigation;
