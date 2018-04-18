import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule, adminComponentList } from './admin-routing.module';
import { AdminGuardGuard } from './service/admin-guard.guard';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    adminComponentList,
  ],
  providers: [AdminGuardGuard]
})
export class AdminModule { }
