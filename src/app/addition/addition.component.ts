import { Component, NgModule, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AdditionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  numberA: number = 0;
  numberB: number = 0;
  numberC: number = this.numberA + this.numberB;
}
