import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { MenuComponent } from './layout/menu/menu.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [{
  path: 'signin', component: SigninComponent
}, 
{
  path: 'menu', component: MenuComponent
},
{
  path: 'footer', component: FooterComponent
},
{
  path: 'layout', component: LayoutComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
