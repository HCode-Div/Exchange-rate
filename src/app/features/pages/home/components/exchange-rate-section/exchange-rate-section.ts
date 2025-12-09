import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { curransie } from '../../../../../shared/services/currancies';

import { ExchageRateCard } from '../exchage-rate-card/exchage-rate-card';
import { CountriesCode } from '../../../../../core/interfaces/countries-code';
import { SelectCurrancy } from '../../../../../shared/components/select-currancy/select-currancy';

@Component({
  selector: 'exchange-section',
  imports: [ExchageRateCard, SelectCurrancy],
  templateUrl: './exchange-rate-section.html',
  styleUrl: './exchange-rate-section.css',
})
export class ExchangeRateSection {
  // Injections
  protected readonly _cd = inject(ChangeDetectorRef);
  readonly _c = curransie;

  // Properties
  showCurransies!: CountriesCode[];
  showBtn: boolean = true;

  // Methods
  loadMoreCurransies() {
    let length = this.showCurransies.length;
    this.showCurransies = this.showCurransies.concat(this._c.slice(length, length + 9));
  }

  // Life Cycle

  ngOnInit(): void {
    this.showCurransies = this._c.slice(0, 9);
  }
}
