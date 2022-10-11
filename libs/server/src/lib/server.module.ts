import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ServerComponent } from './server.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ServerComponent],
  exports: [ServerComponent],
})
export class ServerModule {}
