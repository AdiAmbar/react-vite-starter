import type { Settings } from "@/types/setting";
import localSettings from "@/setting/local.json";
import productionSettings from "@/setting/production.json";

import { getOrigin } from "./location";
import { ApplicationURL } from "./application";

export function getSettings(window: Window): Settings {
  const origin = getOrigin(window);
  let result;
  if (origin === ApplicationURL.production) {
    result = productionSettings;
  } else {
    result = localSettings;
  }
  return result;
}
