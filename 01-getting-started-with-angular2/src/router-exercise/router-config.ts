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
        path: 'section1',
        component: DashboardSection,
        outlet: 'section1'
    },
    {
        path: 'section2',
        component: DashboardSection,
        outlet: 'section2'
    },
    {
        path: 'section3',
        component: DashboardSection,
        outlet: 'section3'
    }


];
