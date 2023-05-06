import { SVGProps } from "react";

function ListIcon({ fill, height, width, className }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill={fill}
      height={height}
      width={width}
      className={className}
      viewBox="0 0 32 32"
    >
      <path d="M0 26.016v-20Q0 3.52 1.76 1.76T6.016 0h20q2.464 0 4.224 1.76T32 6.016v20q0 2.496-1.76 4.224T26.016 32h-20Q3.52 32 1.76 30.24T0 26.016zm4 0q0 .832.576 1.408t1.44.576h20q.8 0 1.408-.576T28 26.016v-20q0-.832-.576-1.408T26.016 4h-20q-.832 0-1.44.608T4 6.016v20zM8 24v-4h4v4H8zm0-5.984v-4h4v4H8zM8 12V8h4v4H8zm6.016 12v-4H24v4h-9.984zm0-5.984v-4H24v4h-9.984zm0-6.016V8H24v4h-9.984z" />
    </svg>
  );
}

export default ListIcon;
