import {RouterConfig} from "@angular/router";
import {DashboardSection} from "./dashboard-section.component";
import {DashboardHeader} from "./dashboard-header";


export const routeConfig:RouterConfig = [

    {
        path: '',
        component: DashboardHeader,
        pathMatch: 'full'
    },
    {
        path: 'section1',
        component: DashboardSection,
        outlet: 'section1'
    }


];
