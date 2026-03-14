globalThis.process ??= {};
globalThis.process.env ??= {};
import { b as baseService } from "./image-transform-endpoint_6t661rsr.mjs";
import "./worker-entry_BgRV1_Wg.mjs";
const service = {
  ...baseService,
  async transform(inputBuffer, transform) {
    return { data: inputBuffer, format: transform.format };
  }
};
var image_service_workerd_default = service;
export {
  image_service_workerd_default as default
};
