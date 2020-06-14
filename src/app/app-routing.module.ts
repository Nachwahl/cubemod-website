import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FeaturesComponent} from './features/features.component';
import {HomeComponent} from './home/home.component';
import {DownloadComponent} from './download/download.component';
import {LoginComponent} from './login/login.component';
import {ShopComponent} from './shop/shop.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'login', component: LoginComponent },
  { path: 'shop', component: ShopComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
