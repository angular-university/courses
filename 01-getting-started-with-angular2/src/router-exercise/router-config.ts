import {Routes} from "@angular/router";
import {DashboardHeader} from "./dashboard-header";
import {PageViewsByBrowserWidget} from "./page-views-by-browser.component";
import {PageViewsPieChartWidget} from "./page-views-pie-chart.component";
import {ImpressionsByCountryWidget} from "./impresssions-by-country.component";


export const routeConfig:Routes = [

    {
        path: '',
        pathMatch:'full',
        redirectTo: '/home'
    },
    {
        path: 'home',
        component: DashboardHeader
    },
    {
        path: 'section1',
        component: PageViewsByBrowserWidget,
        outlet: 'section1'
    },
    {
        path: 'section2',
        component: PageViewsPieChartWidget,
        outlet: 'section2'
    },
    {
        path: 'section3',
        component: ImpressionsByCountryWidget,
        outlet: 'section3'
    }


];
