import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

import { Home } from './home.model';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class HomeService {
    private portals: Home[] = [];
    private portalsUpdated = new Subject<Home[]>();

    constructor(private _http: HttpClient, private router: Router) { }

    getYogas() {
        return this._http.get("https://yoga-server.herokuapp.com/api/portals")
    }
    getYogaUpdatedListener() {
        return this.portalsUpdated.asObservable();
    }


}