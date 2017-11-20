import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-html',
  template: `
    <h1>Hey this is inline heading</h1>
    <p>{{myObject.location}}</p>
    <ul>
      <li *ngFor="let arr of myArr">{{arr}}</li>
    </ul>
  `,
  styleUrls: ['./inline-html.component.css']
})
export class InlineHtmlComponent implements OnInit {
  myObject:Object;
  myArr:Array<any>;
  constructor() {

  }

  ngOnInit() {
  this.myObject = {
    gender:'male',
    age:33,
    location:'USA'
  }
  this.myArr = ['him','hers','yours'];
  }

}
