import { Component, Input } from '@angular/core';

@Component({
  selector: 'exchage-rate-card',
  imports: [],
  templateUrl: './exchage-rate-card.html',
  styleUrl: './exchage-rate-card.css',
})
export class ExchageRateCard {
  @Input() countruyCode!: string;
  @Input() currancyName!: string;
  @Input() currancyCode!: string;
  @Input() currancyChangeCode!: string;
  @Input() exchangeRate!: string;
}
