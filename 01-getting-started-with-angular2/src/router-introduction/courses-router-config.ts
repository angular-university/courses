


import {Playlist} from "./playlist.component";


export const coursesRouterConfig = [
    {
        path: 'courses',
        loadChildren: '/src/router-introduction/courses.module'
    },
    {
        path: 'playlist',
        component: Playlist,
        outlet: 'playlist'
    }
];