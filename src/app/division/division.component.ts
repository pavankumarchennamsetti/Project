import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css'],
})
export class DivisionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  numberA: number = 0;
  numberB: number = 1;
  numberC: number = this.numberA / this.numberB;
}
