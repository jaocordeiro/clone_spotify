import { SVGProps } from "react";

function ChevronLeftIcon({
  fill,
  height,
  width,
  className,
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill={fill}
      width={width}
      height={height}
      className={className}
      viewBox="0 0 298 511.93"
    >
      <path
        fillRule="nonzero"
        d="M285.77 441c16.24 16.17 16.32 42.46.15 58.7-16.16 16.24-42.45 16.32-58.69.16l-215-214.47c-16.24-16.16-16.32-42.45-.15-58.69L227.23 12.08c16.24-16.17 42.53-16.09 58.69.15 16.17 16.24 16.09 42.54-.15 58.7l-185.5 185.04L285.77 441z"
      />
    </svg>
  );
}

export default ChevronLeftIcon;
