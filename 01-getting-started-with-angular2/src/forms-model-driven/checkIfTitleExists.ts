
import {FormControl} from "@angular/forms";
import {HTTP_PROVIDERS, Http, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs/Rx";



export function checkIfTitleExists(http:Http, ctrl: FormControl): Observable<any> {

    const search: URLSearchParams = new URLSearchParams();
    search.set('search', ctrl.value);

    return http.get('/lessons', {search:search})
            .map(res => {

                const lesson = res.json();

                return !lesson ? null : {
                    titleExists: {
                        valid:false
                    }
                };
            });
}