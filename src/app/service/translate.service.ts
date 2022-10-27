import {Injectable} from '@angular/core';
import {IElement} from "../model/i-element";

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  elements: IElement[] = [{
    eng: 'one',
    vie: 'một'
  }, {
    eng: 'two',
    vie: 'hai'
  }, {
    eng: 'three',
    vie: 'ba'
  }, {
    eng: 'four',
    vie: 'bốn'
  }, {
    eng: 'five',
    vie: 'năm'
  }]

  constructor() {
  }

  getAll() {
    return this.elements;
  }

  translate(eng: string) {
    return this.elements.find(el => el.eng === eng);
  }

}
