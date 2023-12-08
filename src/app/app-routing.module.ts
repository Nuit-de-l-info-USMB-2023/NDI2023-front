import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './core/constants/routes';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/welcome/welcome.module').then(m => m.WelcomeModule),
  },
  {
    path: ROUTES.home,
    loadChildren: () =>
      import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: ROUTES.user,
    loadChildren: () =>
      import('./modules/user/user.module').then(m => m.UserModule),
  },
  { path: ROUTES.notFound, component: NotFoundComponent },
  { path: '**', redirectTo: ROUTES.notFound },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
