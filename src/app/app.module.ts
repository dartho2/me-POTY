import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';


import { YogaComponent } from './layout/yoga/yoga.component';
import { HeaderYogaComponent } from './layout/yoga/header-yoga/header-yoga.component';
import { YNewsComponent } from './layout/yoga/y-news/y-news.component';
import { PotyComponent } from './layout/poty/poty.component';
import { PNewsComponent } from './layout/poty/p-news/p-news.component';
import { HeaderPotyComponent } from './layout/poty/header-poty/header-poty.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { YGalleryComponent } from './layout/yoga/y-gallery/y-gallery.component';



@NgModule({
  declarations: [
    AppComponent,
    YogaComponent,
    HeaderYogaComponent,
    YNewsComponent,
    PotyComponent,
    PNewsComponent,
    HeaderPotyComponent,
    HeaderComponent,
    HomeComponent,
    YGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
