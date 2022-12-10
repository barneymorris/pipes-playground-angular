import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = '';
  date: string = '';
  amount: number = 0;
  height: number = 0;
  miles: number = 0;
  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000,
  };

  onNameChange(event: Event) {
    const { value } = event.target as HTMLInputElement;
    this.name = value;
  }

  onDateChange(event: Event) {
    const { value } = event.target as HTMLInputElement;
    this.date = value;
  }

  onAmountChange(event: Event) {
    const { value } = event.target as HTMLInputElement;
    this.amount = parseFloat(value);
  }

  onHeightChange(event: Event) {
    const { value } = event.target as HTMLInputElement;
    this.height = parseFloat(value);
  }

  onMilesChange(event: Event) {
    const { value } = event.target as HTMLInputElement;
    this.miles = parseFloat(value);
  }
}
