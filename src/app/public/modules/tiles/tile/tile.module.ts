import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';

import {
  SkyChevronModule
} from '@skyux/indicators';
import {
  SkyI18nModule
} from '@skyux/i18n';
import {
  SkyTileComponent
} from './tile.component';
import {
  SkyTileSummaryComponent
} from './tile-summary.component';
import {
  SkyTileTitleComponent
} from './tile-title.component';
import {
  SkyIconModule
} from '@skyux/indicators';

@NgModule({
  declarations: [
    SkyTileComponent,
    SkyTileSummaryComponent,
    SkyTileTitleComponent
  ],
  imports: [
    CommonModule,
    SkyChevronModule,
    SkyI18nModule,
    SkyIconModule
  ],
  exports: [
    SkyTileComponent,
    SkyTileSummaryComponent,
    SkyTileTitleComponent
  ]
})
export class SkyTileModule { }
