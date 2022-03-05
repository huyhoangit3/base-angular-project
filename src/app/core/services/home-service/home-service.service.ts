import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({providedIn: 'root'})

export class HomeService {

    constructor(private httpClient: HttpClient) {
    }

    getHomeData(): Observable<any> {
        return this.httpClient.get(`${environment.baseApiUrl}/home`)
    }

}