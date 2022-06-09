import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestvideosComponent } from './latestvideos/latestvideos.component';

@NgModule({
  declarations: [LatestvideosComponent],
  imports: [CommonModule],
  exports: [LatestvideosComponent],
})
export class SidebarModule {}
