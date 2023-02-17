import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UrlApiResponse, UrlModel} from "../models/url.model";
import {Observable} from "rxjs";


@Injectable({
  providedIn: "root",
})
export class UrlService {

  // redirects anything with /api to http://localhost:8080/
  baseURL: string = '/api'

  constructor(private http: HttpClient) {
  }

  addUrl(urlModel: UrlModel): Observable<UrlApiResponse> {
    const headers = {'content-type': 'application/json'}
    const body = JSON.stringify(urlModel)
    console.log(body)
    return this.http.post<UrlApiResponse>(
      `${this.baseURL}/shortened-urls/shorten`, body, {'headers': headers})
  }
}
