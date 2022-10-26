import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
  bg_color: string = 'white';
  color: string = 'black';

  constructor() {
  }

  ngOnInit(): void {
  }

  black_theme() {
    this.bg_color = 'black';
    this.color = 'white';
  }

  light_theme() {
    this.bg_color = 'white';
    this.color = 'black';
  }
}
