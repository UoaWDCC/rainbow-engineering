function createFooterSVG(
  screenWidth: number,
  svgId: string,
  hasAnimated: boolean,
  leftTailRatio?: number,
) {
  if (!leftTailRatio) {
    leftTailRatio = 0.15;
  }
  const rightTailRatio = 1 - leftTailRatio;

  const leftTail = (screenWidth - 68) * leftTailRatio;
  const rightTail = (screenWidth - 68) * rightTailRatio;

  return (
    <>
      <path
        id="path1-2"
        d={`m 0,23.78 h${leftTail}a 35,35 0 0 1 33.81,25.94 35,35 0 0 0 33.81,25.94 h${rightTail}`}
        stroke="#FFF677"
        strokeWidth="9"
      />
      <path
        id="path2"
        d={`m 0,13.78 h${leftTail}a 45,45 0 0 1 43.47,33.35 25,25 0 0 0 24.15,18.53 h${rightTail}`}
        strokeWidth="9"
        stroke="#FFB050"
      />
      <path
        id="path4"
        d={`m 0,3.78 ah${leftTail} 55,55 0 0 1 53.13,40.76 15,15 0 0 0 14.49,11.12 h${rightTail}`}
        stroke="#F45757"
        strokeWidth="9"
      />
      <path
        id="path2-7"
        d={`m 0,33.78 h${leftTail}a 25,25 0 0 1 24.15,18.53 45,45 0 0 0 43.47,33.35 h${rightTail}`}
        stroke="#68BC8E"
        strokeWidth="9"
      />
      <path
        id="path4-0"
        d={`m 0,43.78 h${leftTail}a 15,15 0 0 1 14.49,11.12 55,55 0 0 0 53.13,40.76 h${rightTail}`}
        stroke="#628BEC"
        strokeWidth="9"
      />
      <path
        id="path6"
        d={`m 0,53.78 h${leftTail}a 5,5 0 0 1 4.83,3.71 65,65 0 0 0 62.79,48.18 h${rightTail}`}
        stroke="#AF4FC0"
        strokeWidth="9"
      />
    </>
  );
}
