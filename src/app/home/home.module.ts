import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule, homeComponentList } from './home-routing.module';
import { AdminGuardGuard } from '../admin/service/admin-guard.guard';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [homeComponentList],
  providers: [AdminGuardGuard]
})
export class HomeModule { }
