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
 * Specifies content to display inside a padded section of a SkyTileContentComponent.
 */
@Component({
  selector: 'sky-tile-content-section',
  styleUrls: ['./tile-content-section.component.scss'],
  templateUrl: './tile-content-section.component.html'
})
export class SkyTileContentSectionComponent implements OnDestroy, OnInit {

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
