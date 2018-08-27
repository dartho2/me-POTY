import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';
import { Yoga } from './yoga.model';
import { Router } from '@angular/router';

@Injectable({providedIn : 'root'})
export class YogaService {
    private yogas: Yoga[] = [];
    private yogasUpdated = new Subject<Yoga[]>();

    constructor(private _http: HttpClient, private router: Router) {}

    getYogas() {
        return this._http.get("https://yoga-server.herokuapp.com/api/portals")
        // .pipe(
        //     map(items => {
        //       return items.filter(items => items.name === "yoga");
        //     }, error => error)) 
        }
        
        // this._http.get<{ message: string, yoga: any }>('https://yoga-server.herokuapp.com/api/portals')
      
        // .pipe(
        //     map((yogaData) => {
        //         return yogaData.yoga.map(yoga => {
        //             return {
        //                     yoga: {
        //                         label: yoga.yoga.label,
        //                         sections: [{
        //                             name:  yoga.yoga.sections[0].name,  //idk?
        //                             label: yoga.yoga.sections[0].label,       //idk?   
        //                             data: [{
        //                                 type:  yoga.yoga.sections[0].data[0].type
        //                             }]       
        //                         }]
        //                     },
        //                     fitness: {
        //                         label: yoga.fitness.label,
        //                         sections: [{
        //                                 name: yoga.fitness.sections.name, //idk?
        //                                 label: yoga.fitness.sections.label    //idk?                  
        //                             }]
        //                     },
        //                     id: yoga._id
                        
        //             };
        //         });
        //     }))
            // .subscribe(response => {
            //     console.log(response)
            // })
        // .subscribe(transformedYogas => {                       // transformedPosts because we need chane mongo "_id" to "id"
            
        //     this.yogas = transformedYogas;
        //     this.yogasUpdated.next([...this.yogas]);
        // });
    
//     getAll() {
//         return this._http.get("http://localhost:3000/api/yoga")
//           .pipe(map(response => response))
//       }
//     handleError(handleError: any): any {
//         throw new Error("Method not implemented.");
//     }
//     getData(): Observable<Yoga[]> {
//         // return this._http.get('http://localhost:3000/api/yoga').map(res => res.json());
//         return this._http.get('http://localhost:3000/api/yoga')
//         .pipe(map(res => {
//             return this.yogas;}))
        
//  }
    getYogaUpdatedListener() {
        return this.yogasUpdated.asObservable();
    }
  
   
}