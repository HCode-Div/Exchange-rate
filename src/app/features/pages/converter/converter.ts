import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectCurrancy } from '../../../shared/components/select-currancy/select-currancy';
@Component({
  selector: 'app-converter',
  templateUrl: './converter.html',
  styleUrl: './converter.css',
  imports: [InputTextModule, FormsModule, SelectCurrancy, ButtonModule],
})
export class Converter {
  value: string = '';
  from: string = '';
  to: string = '';
  getData(x: string) {
    this.from = x;
  }

  getTo(x: string) {
    this.to = x;
  }
  show() {
    console.log(this.value);
    console.log(this.from);
    console.log(this.to);
  }
}
