import { SVGProps } from "react";

function PlayIcon({ fill, height, width }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill={fill} height={height} width={width} viewBox="0 0 17.804 17.804">
      <path d="M2.067.043a.4.4 0 01.426.042l13.312 8.503a.41.41 0 01.154.313c0 .12-.061.237-.154.314L2.492 17.717a.402.402 0 01-.25.087l-.176-.04a.399.399 0 01-.222-.361V.402c0-.152.086-.295.223-.359z" />
    </svg>
  );
}

export default PlayIcon;
