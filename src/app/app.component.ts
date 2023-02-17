import {Component} from '@angular/core';
import {UrlService} from "./services/url.service";
import {UrlApiResponse, UrlModel} from "./models/url.model";
import {catchError, throwError} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'url shortener';
  urlModel: UrlModel = {url: ""};
  shortenedUrl?: UrlApiResponse;
  errorMessage?: string;

  constructor(private urlService: UrlService) {
  }

  addUrl() {
    if (this.urlModel) {
      this.urlService.addUrl(this.urlModel).pipe(
        catchError(err => {
          this.errorMessage = "invalid url"
          return throwError(err)
        })
      )
        .subscribe(data => {
          this.shortenedUrl = data
        })
    }
  }

  getType($event: string) {
    this.urlModel.expiration ??= {unit: '', amount: 0};
    this.urlModel.expiration.unit = $event;
    console.log(this.urlModel.expiration?.unit)
  }

  getAmount($event: number) {
    this.urlModel.expiration ??= {unit: '', amount: 0};
    this.urlModel.expiration.amount = $event;
  }
}
