import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'pago', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'details/:id', loadChildren: './pages/todo-details/todo-details.module#TodoDetailsPageModule' },
  {path: 'details', loadChildren: './pages/todo-details/todo-details.module#TodoDetailsPageModule'},
  { path: 'pago', loadChildren: './pago/pago.module#PagoPageModule' },
  { path: 'ide-modal', loadChildren: './ide-modal/ide-modal.module#IdeModalPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
