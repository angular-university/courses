import {RouterConfig} from "@angular/router";
import {DashboardSection} from "./dashboard-section.component";
import {DashboardHeader} from "./dashboard-header";


export const routeConfig:RouterConfig = [

    {
        path: '',
        component: DashboardHeader
    },
    {
        path: 'playlist',
        component: DashboardSection,
        outlet: 'playlist'
    }


];
