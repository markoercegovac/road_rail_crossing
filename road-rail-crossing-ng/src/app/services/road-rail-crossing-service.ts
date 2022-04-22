import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RoadRailCrossing} from "../model/road-rail-crossing";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

const URL = environment.road_rail_crossing;

@Injectable({
    providedIn: 'root'
})

export class RoadRailCrossingService {


    constructor(private http: HttpClient) {

    }

    public save(roadRailCrossing: RoadRailCrossing){
        return this.http.post(URL + '/save',roadRailCrossing);
    }

    public getOne(id: number): Observable<RoadRailCrossing> {
        console.log(id);
        return this.http.get<RoadRailCrossing>(URL + '/edit/' + id);
    }

    public delete(id: number){
        return this.http.delete(URL+'/delete/'+id);
    }

}
