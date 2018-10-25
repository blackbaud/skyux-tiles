import {
  NgModule
} from '@angular/core';

import {
  SkyUIConfigService
} from '@skyux/core';

import {
  UIConfigService
} from '@blackbaud-internal/skyux-lib-ui-config-service';

import {
  SkyTilesModule
} from './public';

import {
  SkyTileDemoTile1Component
} from './visual/tiles/tile-demo-tile1.component';
import {
  SkyTileDemoTile2Component
} from './visual/tiles/tile-demo-tile2.component';

@NgModule({
  imports: [
    SkyTilesModule
  ],
  exports: [
    SkyTilesModule
  ],
  providers: [
    {
      provide: SkyUIConfigService,
      useClass: UIConfigService
    }
  ],
  entryComponents: [
    SkyTileDemoTile1Component,
    SkyTileDemoTile2Component
  ]
})
export class AppExtrasModule { }
