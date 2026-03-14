globalThis.process ??= {};
globalThis.process.env ??= {};
import "cloudflare:workers";
import { w } from "./chunks/worker-entry_BgRV1_Wg.mjs";
export {
  w as default
};
