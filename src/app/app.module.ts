import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { DownloadComponent } from './download/download.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';


import {HttpClientModule} from '@angular/common/http';
import {MarkdownModule} from 'ngx-markdown';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';


@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    HomeComponent,
    DownloadComponent,
    LoginComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatChipsModule,
    HttpClientModule,
    MatExpansionModule,
    MarkdownModule.forRoot(),
    MatTooltipModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
