import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

import { Poty } from './poty.model';
import { Router } from '@angular/router';

@Injectable({providedIn : 'root'})
export class PotyService {
    private potys: Poty[] = [];
    private potysUpdated = new Subject<Poty[]>();

    constructor(private _http: HttpClient, private router: Router) {}

    getPotys() {
        this._http.get<{ message: string, poty: any }>('http://localhost:3000/api/poty')
        .pipe(
            map((potyData) => {
                return potyData.poty.map(poty => {
                    return {
                        id: poty._id,
                        title: poty.title
                    };
                });
            }))
        .subscribe(transformedYogas => {                       // transformedPosts because we need chane mongo "_id" to "id"
            this.potys = transformedYogas;
            this.potysUpdated.next([...this.potys]);
        });
    }
    getPotyUpdatedListener() {
        return this.potysUpdated.asObservable();
    }
  
   
}