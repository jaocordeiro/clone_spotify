import { SVGProps } from "react";

function ExpandIcon({
  fill,
  height,
  width,
  className,
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill={fill}
      height={height}
      width={width}
      className={className}
      viewBox="0 0 24 24"
    >
      <g
        fill={fill}
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path data-name="Right" d="M3 17.3L3 21 6.7 21" />
        <path d="M10 14L3.8 20.2" />
        <path d="M14 10L20.2 3.8" />
        <path data-name="Right" d="M21 6.7L21 3 17.3 3" />
      </g>
    </svg>
  );
}

export default ExpandIcon;
