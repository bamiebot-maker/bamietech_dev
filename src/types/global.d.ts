// Tawk.to TypeScript declarations
interface Tawk_API {
  maximize: () => void;
  minimize: () => void;
  toggle: () => void;
  showWidget: () => void;
  hideWidget: () => void;
}

declare global {
  interface Window {
    Tawk_API?: Tawk_API;
  }
}

export {};
