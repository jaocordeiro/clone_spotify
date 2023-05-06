import Image from "next/image";
import Link from "next/link";
import ButtonPlay from "../ButtonPlay";

interface LibraryType {
  mockLibrary: {
    sound: string;
    img: string;
    playlist: string;
  }[];
}

const Playlist = ({ mockLibrary }: LibraryType) => {
  return (
    <section className="grid grid-cols-3 mt-8 px-6">
      {mockLibrary.map((item) => (
        <Link
          href=""
          key={item.img}
          className="group relative flex items-center mb-5 gap-y-1.5 mr-8 rounded-xl ease-in duration-300"
        >
          <Image width={96} height={96} src={item.img} alt="" />
          <div className="flex items-center w-full h-24 py-3 px-4 bg-white bg-opacity-10 backdrop-blur-xl rounded drop-shadow-lg">
            <p className="text-white text-lg font-extrabold">{item.sound}</p>
          </div>
          <ButtonPlay />
        </Link>
      ))}
    </section>
  );
};

export default Playlist;
