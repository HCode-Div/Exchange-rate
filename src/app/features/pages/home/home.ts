import { Component, HostListener, inject, PLATFORM_ID } from '@angular/core';
import {} from '@angular/cli';
import { isPlatformBrowser } from '@angular/common';
import { FeatureCard } from './components/feature-card/feature-card';
import { ExchangeRateSection } from './components/exchange-rate-section/exchange-rate-section';
import { SelectCurrancy } from './components/select-currancy/select-currancy';
@Component({
  selector: 'app-home',
  imports: [FeatureCard, ExchangeRateSection, SelectCurrancy],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly _platform = inject(PLATFORM_ID);
  showImg: boolean = true;

  @HostListener('window:resize')
  checkSize() {
    if (window.innerWidth >= 768) {
      this.showImg = true;
    } else {
      this.showImg = false;
    }
  }

  // Life Cycle Hook

  ngOnInit(): void {
    if (isPlatformBrowser(this._platform)) {
      if (window.innerWidth >= 768) {
        this.showImg = true;
      } else {
        this.showImg = false;
      }
    }
  }
}
