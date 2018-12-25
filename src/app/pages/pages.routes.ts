import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const pagesRoutes: Routes = [
    {
        path: '', component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
            { path: 'progress', component: ProgressComponent , data: { titulo: 'Progress' }},
            { path: 'graficas1', component: Graficas1Component , data: { titulo: 'Graficas' }},
            { path: 'rxjs', component: RxjsComponent , data: { titulo: 'RxJs' }},
            { path: 'account-settings', component: AccountSettingComponent , data: { titulo: 'Ajustes de Tema' }},
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    },
]

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);