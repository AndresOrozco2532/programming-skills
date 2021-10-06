import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { ServerMock } from '../mock/app-serve.mock';
import { CONSTANTS } from 'src/app/shared/constants/constant';
import { SharedService } from '../../shared/shared.service';

@Injectable()
export class AppMockInterceptorService implements HttpInterceptor {
  private _localServer: ServerMock;

  constructor(private _sharedService: SharedService) {
    this._localServer = new ServerMock();
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this._checkIsTest(req)) {
      return this._sendLocalServer(req);
    }
    return next.handle(req);
  }
  /**
   * Check if enviroment not is production and token is for test or email and password is given for test
   * @param req - Info request sended
   */
  private _checkIsTest(req: HttpRequest<any>): boolean {
    return !environment.production && environment.isTestServer;
  }

  private _sendLocalServer(req: any): Observable<HttpEvent<any>> {
    const server = this._localServer;
    return server.request(req).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((err: HttpErrorResponse) => this._catchError(req, err))
    );
  }

  private _catchError(req: HttpRequest<any>, error: any) {
    let messageError = CONSTANTS.MESSAGES.ERROR;

    if (error.status === CONSTANTS.HTTP_CODES.NOT_FOUND) {
      this._showError(req, CONSTANTS.MESSAGES.ERROR_NOT_FOUND_RESOURCE);
      return throwError(error);
    }

    if (error.error) {
      const err = error.error;
      messageError = this._message(err);
    }
    this._showError(req, messageError);
    return throwError(error);
  }

  private _message(err: any): any {
    const firstError = Object.keys(err)[0];
    const typeError = typeof err[firstError];
    const isStringError = typeError === 'string';

    if (!isStringError && typeError === 'object') {
      return this._message(err[firstError][0]);
    }
    return isStringError ? err[firstError] : err[firstError][0];
  }

  private _showError(req: any, msg: any, error = null) {
    // showError attribute send from component that don't need to show snackbar error (only when send false)
    if (req.body && req.body.showError === false) {
      return;
    }
    msg = !msg || msg.length <= 2 ? CONSTANTS.MESSAGES.ERROR : msg;
    console.error(error);
    this._sharedService.showSnackbar(msg);
  }
}
