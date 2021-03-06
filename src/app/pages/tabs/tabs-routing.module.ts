import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'dashboard',
        children: [
          {
            path: 'admin',
            loadChildren: () =>
            import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
          },
          {
            path: 'member',
            loadChildren: () =>
            import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
          }
        ],
      },
      {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
