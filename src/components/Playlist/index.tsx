import Link from "next/link";

const Playlist = ({ mockLibrary }: any) => {
  // const test = mockLibrary.slice(6);
  return (
    <section>
      {mockLibrary().map((item: any) => (
        <Link href="" key={item.img} className="flex">
          <img src={item.img} alt="" className="w-12 mr-3" />
          <div className="">
            <p className="text-white text-sm">{item.sound}</p>
            <p className="text-xs text-gray-400">{item.playlist}</p>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Playlist;
