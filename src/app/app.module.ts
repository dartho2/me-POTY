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
import { YTypeComponent } from './layout/yoga/y-type/y-type.component';
import { YAdvantageComponent } from './layout/yoga/y-advantage/y-advantage.component';
import { YTeacherComponent } from './layout/yoga/y-teacher/y-teacher.component';
import { YYogaComponent } from './layout/yoga/y-yoga/y-yoga.component';
import { YCuriosityComponent } from './layout/yoga/y-curiosity/y-curiosity.component';
import { YBuyComponent } from './layout/yoga/y-buy/y-buy.component';
import { YPriceComponent } from './layout/yoga/y-price/y-price.component';



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
    YGalleryComponent,
    YTypeComponent,
    YAdvantageComponent,
    YTeacherComponent,
    YYogaComponent,
    YCuriosityComponent,
    YBuyComponent,
    YPriceComponent
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
