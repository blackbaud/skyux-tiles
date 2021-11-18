import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SkyTileThemeDemoComponent } from './visual/tiles-theme/tile-theme-visual.component';
import { SkyTileDemoComponent } from './visual/tiles/tile-visual.component';
import { VisualComponent } from './visual/visual.component';

const routes: Routes = [
  {
    path: '',
    component: VisualComponent,
  },
  {
    path: 'visual/tiles',
    component: SkyTileDemoComponent,
  },
  {
    path: 'visual/tiles-theme',
    component: SkyTileThemeDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
