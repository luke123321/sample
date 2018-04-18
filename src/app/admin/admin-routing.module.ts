import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AdminGuardGuard } from './service/admin-guard.guard';

const adminRoutes: Routes = [
  {
    path: '', canActivateChild: [AdminGuardGuard], children: [
      { path: 'main', component: MainComponent },
      { path: '', component: MainComponent },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      adminRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AdminRoutingModule { }

export const adminComponentList = [
  MainComponent
];
