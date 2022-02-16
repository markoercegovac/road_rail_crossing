import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Risk} from "../model/risk";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

const URL = environment.risk;

@Injectable({
    providedIn: 'root'
})

export class RiskService {
    constructor(private http: HttpClient) {

    }

    public getAllRiskData(): Observable<Risk[]> {
        return this.http.get<Risk[]>(URL + '/all');
    }
}
