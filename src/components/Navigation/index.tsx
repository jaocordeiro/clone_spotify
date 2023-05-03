import Link from "next/link";
import mock from "./mock";

const Navigation = () => {
  return (
    <nav>
      {mock().map((text: any) => (
        <Link href="" className="flex items-center">
          <div className="mr-4">
            <img src={text.icon} alt={text.name} className="w-8" />
          </div>
          <p>{text.name}</p>
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
