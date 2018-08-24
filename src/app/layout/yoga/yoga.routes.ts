// import { ItemsComponent } from './items/items.component';
import { Routes, RouterModule } from '@angular/router';
import { YNewsComponent } from './y-news/y-news.component';
import { YogaComponent } from './yoga.component';

export const YOGA_ROUTES: Routes = [
    { path: 'yoga', component: YogaComponent },
    { path: 'yoga/news', component: YNewsComponent }
];