import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-factorial',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './factorial.component.html',
  styleUrl: './factorial.component.scss',
})
export class FactorialComponent {
  number: number = 0;
  result: number | undefined;

  calculateFactorial() {
    this.result = this.factorial(this.number);
  }

  factorial(n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * this.factorial(n - 1);
    }
  }
}
