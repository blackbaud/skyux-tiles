import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SkyPageModule } from '@skyux/layout';

import { SkyTilesModule } from 'projects/tiles/src/public-api';

import { SkyTileDemoBillingComponent } from './tiles/tile-demo-billing.component';
import { SkyTileDemoProductsComponent } from './tiles/tile-demo-products.component';
import { SkyTileDemoComponent } from './tiles/tile-visual.component';
import { SkyTileThemeDemoComponent } from './tiles-theme/tile-theme-visual.component';
import { VisualComponent } from './visual.component';
import { SkyE2eThemeSelectorModule } from '@skyux/e2e-client';

@NgModule({
  declarations: [
    SkyTileDemoBillingComponent,
    SkyTileDemoProductsComponent,
    SkyTileDemoComponent,
    SkyTileThemeDemoComponent,
    VisualComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SkyE2eThemeSelectorModule,
    SkyPageModule,
    SkyTilesModule,
  ],
})
export class VisualModule {}
