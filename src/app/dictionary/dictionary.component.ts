import {Component, OnInit} from '@angular/core';
import {IElement} from "../model/i-element";
import {TranslateService} from "../service/translate.service";

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {
  elements: IElement[] = []

  constructor(private translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.elements = this.translateService.getAll();
  }

}
