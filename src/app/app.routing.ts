import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';

import { WrapperComponent } from '@shared/layouts/wrapper/wrapper.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '', component: WrapperComponent, canActivateChild: [MetaGuard], children: [
      { path: 'home', loadChildren: './home/home.module#HomeModule', },
      // without meta
      { path: 'mock', loadChildren: './mock-server-browser/mock-server-browser.module#MockServerBrowserModule' },
      // with meta
      { path: 'back', loadChildren: './transfer-back/transfer-back.module#TransferBackModule' },
      // 404
      { path: '**', loadChildren: './not-found/not-found.module#NotFoundModule' },
    ]
  }
];
// must use {initialNavigation: 'enabled'}) - for one load page, without reload
export const AppRoutes = RouterModule.forRoot(routes, { initialNavigation: 'enabled' });
