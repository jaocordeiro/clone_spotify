import Image from "next/image";
import Link from "next/link";
import ButtonPlay from "../ButtonPlay";

interface PlayedType {
  mostPlayed: {
    sound: string;
    img: string;
    description: string;
  }[];
  titlePlayed: string;
}

const MostPlayed = ({ mostPlayed, titlePlayed }: PlayedType) => {
  return (
    <section className="grid gap-9 mt-8 mb-20">
      <p className="text-2xl font-bold">{titlePlayed}</p>
      <div className="flex gap-9 mt-4">
        {mostPlayed.map((item) => (
          <Link
            href=""
            key={item.sound}
            className="group rounded-md grid items-center bg-white bg-opacity-10 backdrop-blur-xl drop-shadow-lg py-4 px-4"
          >
            <Image
              className="rounded-md"
              width={180}
              height={150}
              src={item.img}
              alt={item.sound}
            />
            <p className="text-base font-bold my-2">{item.sound}</p>
            <p className="text-sm text-gray-400 font-medium">
              {item.description}
            </p>
            <ButtonPlay />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MostPlayed;
