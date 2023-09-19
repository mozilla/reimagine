export {};

declare global {
  interface Window {
    gtag: (command: string, action: string, options: object) => void;
  }
}
