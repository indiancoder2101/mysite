import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchItemComponent } from './search-item/search-item.component';
import { YourOrderComponent } from './your-order/your-order.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'your-order', component: YourOrderComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search-item', component: SearchItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
