import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.css'],
})
export class SubtractionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  numberA: number = 0;
  numberB: number = 0;
  numberC: number = this.numberA-this.numberB;
}
