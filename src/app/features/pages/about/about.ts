import { Component, HostListener } from '@angular/core';
import { FeatureCard } from '../../../shared/components/feature-card/feature-card';

@Component({
  selector: 'app-about',
  imports: [FeatureCard],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  showImg: boolean = true;

  @HostListener('window:resize')
  checkSize() {
    if (window.innerWidth >= 768) {
      this.showImg = true;
    } else {
      this.showImg = false;
    }
  }
}
