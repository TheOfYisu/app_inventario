import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./pages/public/public.module').then(m => m.PublicModule)},
  {path: 'public', loadChildren: () => import('./pages/public/public.module').then(m => m.PublicModule)},
  {path: 'private', loadChildren: () => import('./pages/private/private.module').then(m => m.PrivateModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
