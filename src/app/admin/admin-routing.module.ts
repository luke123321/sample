import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AdminGuardGuard } from './service/admin-guard.guard';
import { TestComponent } from './test/test.component';
import { NavComponent } from './main/component/nav/nav.component';
import { NavItemComponent } from './main/component/nav/component/nav-item.component';
import { ToolBarComponent } from './main/component/tool-bar/tool-bar.component';
import { CardComponent } from './conponent/card/card.component';
import { FormComponent } from './conponent/form/form.component';
import { FormItemComponent } from './conponent/form/component/form-item.component';

const adminRoutes: Routes = [
  {
    path: '', canActivateChild: [AdminGuardGuard], children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      {
        path: 'main', component: MainComponent, children: [
          { path: 'test', component: TestComponent },
        ]
      }
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
  MainComponent,
  NavComponent,
  TestComponent,
  NavItemComponent,
  ToolBarComponent,
  CardComponent,
  FormComponent,
  FormItemComponent
];
