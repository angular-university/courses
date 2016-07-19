import {RouterConfig} from "@angular/router";
import {DashboardSection} from "./dashboard-section.component";
import {DashboardHeader} from "./dashboard-header";


export const routeConfig:RouterConfig = [

    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    },
    {
        path: 'home',
        component: DashboardHeader,
    },
    {
        path: 'section',
        component: DashboardSection,
        outlet: 'section'
    }


];
