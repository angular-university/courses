
import {Headers} from "@angular/http";

export function xhrHeaders() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    headers.append('X-Requested-With','XMLHttpRequest');
    return {headers};
} 