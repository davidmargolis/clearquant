import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import {API_URL} from '../env';
import {Gate} from './gate.model';

@Injectable()
export class GatesApiService {

  constructor(private http: HttpClient) {
  }

  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

  // GET list of public, future events
  getGates(): Observable<Gate[]> {
    return this.http
      .get<Gate[]>(`${API_URL}/gates`)
      .catch(GatesApiService._handleError);
  }
}
