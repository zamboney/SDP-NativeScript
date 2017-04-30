// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModuleStage0 } from "./stage-0/app.module";
import { AppModuleStage1 } from "./stage-1/app.module";

platformNativeScriptDynamic().bootstrapModule(AppModuleStage1);
