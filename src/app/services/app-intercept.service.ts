import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpRequest, HttpHandler, HttpResponse } from '@angular/common/http';
import {Observable} from "rxjs";
import { tap } from 'rxjs/operators';
import { NgxSpinnerService } from "ngx-spinner";
import { API_KEY, BASE_URL} from '../../environments/environment';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(private spinner: NgxSpinnerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinner.show();
    const ReqURL = req.url.split('?');
    const url = ReqURL[0];
    const queryParams = ReqURL[1];

    const clonedReq = req.clone({url: `${BASE_URL}/${url}?api_key=${API_KEY}&${queryParams}`});


    return next.handle(clonedReq).pipe(tap((event: HttpEvent<any>) => {
      if(event instanceof HttpResponse) {
        this.spinner.hide();
      }
    }));
  }
}
