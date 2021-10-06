import { Observable, throwError } from 'rxjs';
import {
  HttpEvent,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';

import { environment } from 'src/environments/environment';

const ROUTES_MOCK = [{ url: '\\/login\\/', data: {} }];

export class ServerMock {
  public request(req: any): Observable<HttpEvent<any>> {
    const statusResponse = 200;
    const response = ROUTES_MOCK.find((route) =>
      new RegExp('(^' + route.url + '$)', 'g').test(req.url)
    );
    if (!response) {
      return throwError(
        new HttpErrorResponse({
          status: 404,
          statusText: `The route was not found ${req.url}`,
        })
      );
    }

    return new Observable((obs) => {
      setTimeout(() => {
        obs.next(
          new HttpResponse({ status: statusResponse, body: response.data })
        );
        obs.complete();
      }, environment.testServeWait);
    });
  }
}
