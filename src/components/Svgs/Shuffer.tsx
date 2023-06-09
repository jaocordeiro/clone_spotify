import { SVGProps } from "react";

function ShufferIcon({ className }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      height="20px"
      width="20px"
      fill="#c3c3c3"
      className={className}
    >
      <g data-name="Layer 2">
        <path
          d="M18.71 14.29a1 1 0 00-1.42 1.42l.29.29H16a4 4 0 010-8h1.59l-.3.29a1 1 0 000 1.42A1 1 0 0018 10a1 1 0 00.71-.29l2-2A1 1 0 0021 7a1 1 0 00-.29-.71l-2-2a1 1 0 00-1.42 1.42l.29.29H16a6 6 0 00-5 2.69A6 6 0 006 6H4a1 1 0 000 2h2a4 4 0 010 8H4a1 1 0 000 2h2a6 6 0 005-2.69A6 6 0 0016 18h1.59l-.3.29a1 1 0 000 1.42A1 1 0 0018 20a1 1 0 00.71-.29l2-2A1 1 0 0021 17a1 1 0 00-.29-.71z"
          data-name="shuffle-2"
        />
      </g>
    </svg>
  );
}

export default ShufferIcon;
