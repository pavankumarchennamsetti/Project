import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionComponent } from './addition/addition.component';
import { DivisionComponent } from './division/division.component';
import { SubtractionComponent } from './subtraction/subtraction.component';

const routes: Routes = [
  {
    path: 'add',
    component: AdditionComponent,
  },
  {
    path: 'sub',
    component: SubtractionComponent,
  },
  {
    path: 'div',
    component: DivisionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
