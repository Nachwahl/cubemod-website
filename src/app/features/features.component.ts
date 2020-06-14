import { Component, OnInit } from '@angular/core';
import {ScriptService} from '../script.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  constructor(public scriptService: ScriptService) {
    scriptService.load('adyenCheckout', ).then(r => {
      scriptService.load('adyenCheckoutConfig');
    });
  }

  ngOnInit(): void {

  }

}
