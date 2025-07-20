declare module "vivus" {
  type VivusTimingFunction =
    | "ease"
    | "ease-in"
    | "ease-out"
    | "ease-in-out"
    | ((x: number) => number);

  interface VivusOptions {
    type?: "delayed" | "sync" | "oneByOne" | "scenario" | "scenario-sync";
    start?: "inViewport" | "manual" | "autostart";
    duration?: number;
    delay?: number;
    animTimingFunction?: VivusTimingFunction;
    pathTimingFunction?: VivusTimingFunction;
    forceRender?: boolean;
    file?: string;
    onReady?: (vivus: Vivus) => void;
  }

  export default class Vivus {
    constructor(
      element: string | Element,
      options?: VivusOptions,
      callback?: () => void,
    );
    play(speed?: number, reset?: boolean): void;
    stop(): void;
    reset(): void;
    finish(): void;
    destroy(): void;

    static LINEAR: (x: number) => number;
    static EASE: (x: number) => number;
    static EASE_OUT: (x: number) => number;
    static EASE_IN: (x: number) => number;
  }
}
