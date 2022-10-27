import {Component, OnInit} from '@angular/core';
import {IElement} from "../model/i-element";
import {TranslateService} from "../service/translate.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  element: IElement | undefined;

  constructor(
    private translateService: TranslateService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const eng = paramMap.get('eng');
      if (typeof eng === 'string')
        this.element = this.translateService.translate(eng)
    })
  }

}
