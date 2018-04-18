import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const homeRoutes: Routes = [
  // { path: '', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      homeRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})

export class HomeRoutingModule { }

export const homeComponentList = [

];
