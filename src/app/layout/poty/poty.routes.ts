// import { ItemsComponent } from './items/items.component';
import { Routes, RouterModule } from '@angular/router';
import { PNewsComponent } from './p-news/p-news.component';
import { PotyComponent } from './poty.component';

export const POTY_ROUTES: Routes = [
    { path: '7mepoty', component: PNewsComponent },
    { path: '7mepoty/news', component: PNewsComponent }
];