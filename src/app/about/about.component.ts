import { Component, OnInit } from '@angular/core';

import { CollectionView } from 'wijmo/wijmo';


import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';
// apply Wijmo license key
import { setLicenseKey } from 'wijmo/wijmo';
setLicenseKey('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');


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
// type MyArrayType = Array<{id: number, text: string}>;

data =  [
    {id: 1, text: 'Sentence 1'},
    {id: 2, text: 'Sentence 2'},
    {id: 3, text: 'Sentence 3'},
    {id: 4, text: 'Sentence 4'},
];
  constructor() { }

  ngOnInit() {
  }
  title = 'Wijmo Starter App';
  data = this.getData();
  getData() {
    var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
        data = [];
    for (var i = 0; i < countries.length; i++) {
      data.push({
        country: countries[i],
        sales: Math.random() * 10000,
        expenses: Math.random() * 5000,
        downloads: Math.round(Math.random() * 20000),
      });
    }
    return new CollectionView(data);
  }
}
