// it uses JIT compilation
// in this type of project compiler is shipped with
// project to browser and the compilation is done
// at browser side
import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";


import { environment } from "./environments/environment"
// app  module is the root module of the application
import { AppModule } from "./app/app.module";

// angular will replace the environment.ts file with the production.ts file
// so that we can use the production mode in production
if(environment.production) {
  enableProdMode();
}

// platform browser dynamic is a platform
// and bootstrap module is a function of it
// which glues the module with the platform
// so the Appmodule is available to the browser
platformBrowserDynamic().bootstrapModule(AppModule)
.catch(err => console.error(err));
