import { FacturedetailComponent } from './facturedetail/facturedetail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './_auth/auth.guard';
import { FacturefinaleComponent } from './facturefinale/facturefinale.component';

const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch: 'full' },
  {path:'user',component:UserComponent,canActivate:[AuthGuard], data:{roles:['User']}},
  {path:'admin',component:AdminComponent,canActivate:[AuthGuard], data:{roles:['Admin']}},
  {path:'forbidden',component:ForbiddenComponent},
  {path:'facturedetail/:id',component:FacturedetailComponent,canActivate:[AuthGuard], data:{roles:['User']}},
  {path:'login',component:LoginComponent},
  {path:'facture/:id',component:FacturefinaleComponent,canActivate:[AuthGuard], data:{roles:['User']}},
  {path:'**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
