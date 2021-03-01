import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';

import {
  SkyThemeService
} from '@skyux/theme';

import {
  Subject
} from 'rxjs';

import {
  takeUntil
} from 'rxjs/operators';

/**
 * Specifies content to display in the tile's title.
 */
@Component({
  selector: 'sky-tile-title',
  templateUrl: './tile-title.component.html',
  styleUrls: ['./tile-title.component.scss']
})
export class SkyTileTitleComponent implements OnDestroy, OnInit {

  public themeName: string;

  private ngUnsubscribe = new Subject();

  constructor(
    private changeDetector: ChangeDetectorRef,
    private themeSvc: SkyThemeService
  ) {}

  public ngOnInit(): void {
    if (this.themeSvc) {
      this.themeSvc.settingsChange
        .pipe(
          takeUntil(this.ngUnsubscribe)
        )
        .subscribe((themeSettings) => {
          this.themeName = themeSettings.currentSettings?.theme?.name;
          this.changeDetector.markForCheck();
        });
    }
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
