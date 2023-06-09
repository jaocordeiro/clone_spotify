import { SVGProps } from "react";

function SearchIcon({ className }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} viewBox="0,0,256,256">
      <path
        d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.947 9.947 0 006.322-2.264l5.971 5.971a1 1 0 101.414-1.414l-5.97-5.97A9.947 9.947 0 0023 13c0-5.511-4.489-10-10-10zm0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8z"
        transform="scale(8.53333)"
        fill="#fff"
        strokeMiterlimit={10}
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
      />
    </svg>
  );
}

export default SearchIcon;
