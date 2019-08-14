import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticatedGuard } from './core/services/authenticated.guard';
import { CreateCardComponent } from './create-card/create-card.component';
import { RegisterComponent } from './auth/register/register.component';


const routes: Routes = [  {
  path: 'create-card',
  loadChildren: () => import('./create-card/create-card.module').then(mod => mod.CreateCardModule),
  // canActivate: [AuthenticatedGuard]
},{
  path: 'view-cards',
  loadChildren: () => import('./cards-list/cards-list.module').then(mod => mod.CardsListModule),
  // canActivate: [AuthenticatedGuard]
},
{
  path: '',
  redirectTo: '',
  component: RegisterComponent,
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
