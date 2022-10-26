import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit {

  @Input() max: number = 10;
  counter = 10;
  interval: any;

  constructor() {
  }

  ngOnInit(): void {
    this.counter = this.max;
  }

  start() {
    this.loading()
  }

  stop() {
    clearInterval(this.interval)
  }

  reset() {
    this.counter = this.max;
  }

  loading() {
    this.interval = setInterval(() => {
      this.counter--;
      if (this.counter == 0) {
        clearInterval(this.interval);
      }
    }, 500);
  }
}
