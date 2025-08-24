declare module '@firecms/neat' {
  export interface NeatColor {
    color: string;
    enabled: boolean;
  }

  export interface NeatConfig {
    colors: NeatColor[];
    speed: number;
    horizontalPressure: number;
    verticalPressure: number;
    waveFrequencyX: number;
    waveFrequencyY: number;
    waveAmplitude: number;
    shadows: number;
    highlights: number;
    colorBrightness: number;
    colorSaturation: number;
    wireframe: boolean;
    colorBlending: number;
    backgroundColor: string;
    backgroundAlpha: number;
    grainScale: number;
    grainSparsity?: number;
    grainIntensity: number;
    grainSpeed: number;
    resolution: number;
    yOffset: number;
  }

  export interface NeatGradientOptions {
    ref: HTMLElement;
    [key: string]: any;
  }

  export class NeatGradient {
    constructor(options: NeatGradientOptions);
    speed: number;
    destroy(): void;
  }
}
