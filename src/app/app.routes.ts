import { Routes } from '@angular/router';
import { StartingPageComponent } from './components/starting-page/starting-page.component';
import { FoodPageComponent } from './components/food-page/food-page.component';

export const routes: Routes = [
    {
        path: 'start',
        component: StartingPageComponent,
    },
    {
        path: 'food',
        component: FoodPageComponent,
    },
    {
        path: '**',
        redirectTo: '/start',
    }
];
