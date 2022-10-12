import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServerModule } from '@learn/server';

import { ServersComponent } from './servers.component';

@NgModule({
  imports: [CommonModule, FormsModule, ServerModule],
  declarations: [ServersComponent],
  exports: [ServersComponent],
})
export class ServersModule {}
