import { SVGProps } from "react";

function MicrophoneIcon({
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
      viewBox="0 0 470 470"
    >
      <path d="M235 302.296c47.177 0 85.423-38.245 85.423-85.423V85.423C320.423 38.245 282.177 0 235 0s-85.423 38.245-85.423 85.423v131.451c0 47.177 38.246 85.422 85.423 85.422z" />
      <path d="M350.423 136.148v30h15v50.726c0 71.915-58.508 130.423-130.423 130.423S104.577 288.79 104.577 216.874v-50.726h15v-30h-45v80.726C74.577 300.273 138.551 369 220 376.589V440h-90.444v30h210.889v-30H250v-63.411c81.449-7.589 145.423-76.317 145.423-159.716v-80.726h-45z" />
    </svg>
  );
}

export default MicrophoneIcon;
