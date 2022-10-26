import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  result: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  calculate(num1: number, num2: number, operator: string) {
    switch (operator) {
      case '+':
        this.result = num1 + num2;
        break;
      case '-':
        this.result = num1 - num2;
        break;
      case '*':
        this.result = num1 * num2;
        break;
      case '/':
        if (num2 != 0)
          this.result = num1 / num2;
        else this.result = 0;
        break;
    }
  }

}
