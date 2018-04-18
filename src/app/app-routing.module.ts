import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
    { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }

export const AppComponentList = [
];
