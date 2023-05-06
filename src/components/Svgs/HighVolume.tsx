import { SVGProps } from "react";

function HighVolumeIcon({
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
      <path
        d="M18.82 4.687a10 10 0 01.05 14.579M16.093 7.612a6 6 0 01.03 8.748m-8.642-.953l1.676 2.073c.873 1.08 1.31 1.621 1.692 1.68a1 1 0 00.891-.315c.261-.286.261-.981.261-2.37v-8.95c0-1.389 0-2.083-.26-2.37a1 1 0 00-.892-.315c-.383.059-.82.6-1.692 1.68L7.48 8.593c-.176.219-.264.328-.373.406a1 1 0 01-.32.153c-.13.036-.27.036-.551.036H4.813c-.757 0-1.135 0-1.44.1A2 2 0 002.1 10.56C2 10.866 2 11.244 2 12c0 .756 0 1.134.1 1.44a2 2 0 001.273 1.272c.305.1.683.1 1.44.1h1.423c.28 0 .42 0 .55.036a1 1 0 01.32.153c.11.078.198.188.374.406z"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default HighVolumeIcon;
