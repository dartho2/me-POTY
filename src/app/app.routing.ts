
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { YogaComponent } from "./layout/yoga/yoga.component";
import { YOGA_ROUTES } from './layout/yoga/yoga.routes';
import { PotyComponent } from "./layout/poty/poty.component";
import { POTY_ROUTES } from './layout/poty/poty.routes';
import { AppComponent } from './app.component';


const routes: Routes = [
    // Home page for first Page as 
    // { path: '', component: AppComponent, data: { title: 'Home' }},
    { path: '', component: HomeComponent, data: { title: 'Home' }},
    { path: '', component: PotyComponent, data: { title: '7mepoty Views' }, children: POTY_ROUTES },
    { path: '', component: YogaComponent, data: { title: 'Yoga Views' }, children: YOGA_ROUTES },
   
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}