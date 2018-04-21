import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule, adminComponentList } from './admin-routing.module';
import { AdminGuardGuard } from './service/admin-guard.guard';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    adminComponentList,
  ],
  providers: [AdminGuardGuard]
})
export class AdminModule { }
