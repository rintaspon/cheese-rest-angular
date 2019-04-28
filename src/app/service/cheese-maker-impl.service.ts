/* Created by Rintaspon on 28 April 2019 */
import { Injectable } from '@angular/core';
import { CheeseMakerService } from './cheese-maker.service';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CheeseMakerImplService extends CheeseMakerService {

  constructor(private http: HttpClient) {
    super();
  }

  makeCheese(milk: any): Observable<any> {

    const customeHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(environment.serverLocation + '/post-cheese', JSON.stringify(milk),
      { headers: customeHeaders, observe: 'response' });
  }

}
