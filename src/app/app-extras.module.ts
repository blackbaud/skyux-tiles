import {
  NgModule
} from '@angular/core';

import {
  SkyTilesModule
} from './public';

@NgModule({
  imports: [
    SkyTilesModule
  ],
  exports: [
    SkyTilesModule
  ],
  providers: [],
  entryComponents: []
})
export class AppExtrasModule { }
