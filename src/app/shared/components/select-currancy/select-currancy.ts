import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { curransie } from '../../services/currancies';
import { CountriesCode } from '../../../core/interfaces/countries-code';

@Component({
  selector: 'app-select-currancy',
  imports: [SelectModule, FormsModule],
  templateUrl: './select-currancy.html',
  styleUrl: './select-currancy.css',
})
export class SelectCurrancy {
  // Properties
  readonly _c = curransie;
  cities: CountriesCode[] | undefined;
  selectedCity: CountriesCode | undefined;

  @Output() changeCurr = new EventEmitter<string>();

  // Methods
  show(): void {
    console.log(this.selectedCity?.currency);
    this.changeCurr.emit(this.selectedCity?.currency);
  }
  flagsAPI(country: string): string {
    return `https://flagsapi.com/${country}/flat/64.png`;
  }

  // life cycle
  ngOnInit() {
    this.cities = this._c;
  }
}
