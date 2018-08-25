// import { ItemsComponent } from './items/items.component';
import { Routes, RouterModule } from '@angular/router';
import { YogaComponent } from './yoga.component';
import { YAdvantageComponent } from './y-advantage/y-advantage.component';
import { YBuyComponent } from './y-buy/y-buy.component';
import { YCuriosityComponent } from './y-curiosity/y-curiosity.component';
import { YGalleryComponent } from './y-gallery/y-gallery.component';
import { YNewsComponent } from './y-news/y-news.component';
import { YPriceComponent } from './y-price/y-price.component';
import { YTeacherComponent } from './y-teacher/y-teacher.component';
import { YTypeComponent } from './y-type/y-type.component';
import { YYogaComponent } from './y-yoga/y-yoga.component';

export const YOGA_ROUTES: Routes = [
    { path: 'yoga', component: YogaComponent },
    { path: 'yoga/zalety', component: YAdvantageComponent },
    { path: 'yoga/cennik', component: YBuyComponent },
    { path: 'yoga/ciekawostki', component: YCuriosityComponent },
    { path: 'yoga/galeria', component: YGalleryComponent },
    { path: 'yoga/aktualnosci', component: YNewsComponent },
    { path: 'yoga/do-kupienia', component: YPriceComponent },
    { path: 'yoga/nauczyciele', component: YTeacherComponent },
    { path: 'yoga/rodzaje', component: YTypeComponent },
    { path: 'yoga/czym-jest', component: YYogaComponent },

];