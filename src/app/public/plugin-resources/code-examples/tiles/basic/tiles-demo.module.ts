import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  SkyTilesModule
} from '@skyux/tiles';

import {
  TilesDemoComponent
} from './tiles-demo.component';

@NgModule({
  imports: [
    CommonModule,
    SkyTilesModule
  ],
  declarations: [
    TilesDemoComponent
  ],
  exports: [
    TilesDemoComponent
  ]
})
export class TilesDemoModule { }
