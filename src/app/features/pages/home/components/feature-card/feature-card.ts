import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'feature-card',
  imports: [CommonModule],
  templateUrl: './feature-card.html',
  styleUrl: './feature-card.css',
})
export class FeatureCard {
  @Input() cardTitle!: string;
  @Input() cardDesc!: string;
  @Input() icon!: string;
  test: boolean = true;
}
