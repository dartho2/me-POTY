import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';


import { YogaComponent } from './layout/yoga/yoga.component';
import { HeaderYogaComponent } from './layout/yoga/header-yoga/header-yoga.component';
import { YNewsComponent } from './layout/yoga/y-news/y-news.component';
import { PotyComponent } from './layout/poty/poty.component';
import { PNewsComponent } from './layout/poty/p-news/p-news.component';
import { HeaderPotyComponent } from './layout/poty/header-poty/header-poty.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    YogaComponent,
    HeaderYogaComponent,
    YNewsComponent,
    PotyComponent,
    PNewsComponent,
    HeaderPotyComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
