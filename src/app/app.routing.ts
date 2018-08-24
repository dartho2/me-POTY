
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { YogaComponent } from "./layout/yoga/yoga.component";
import { YOGA_ROUTES } from './layout/yoga/yoga.routes';
import { PotyComponent } from "./layout/poty/poty.component";
import { POTY_ROUTES } from './layout/poty/poty.routes';


const routes: Routes = [
    { path: '', component: YogaComponent, data: { title: 'Yoga Views' }, children: YOGA_ROUTES },
    { path: '', component: PotyComponent, data: { title: '7mepoty Views' }, children: POTY_ROUTES }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}