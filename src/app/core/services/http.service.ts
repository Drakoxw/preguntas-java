import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

import { URL_API_BASE } from '@constants/index';
import { httpErrorHandler } from '@shared/utils';
import { PageData, PageResponse, Pagination, ResponseBase } from '@interfaces/index';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private http = inject(HttpClient)

  page(payload: Pagination): Observable<{
    error: boolean;
    msg: string;
    data?: PageData<unknown>;
  }> {
    const res = { error: true, msg: 'Error inesperado', data: undefined as PageData<unknown> | undefined };
    return this.http.post<PageResponse<unknown>>(`${URL_API_BASE}/api/snacks/page`, payload).pipe(
      map((r) => {
        res.msg = r.message;
        if (!r.success) {
          return res;
        }

        res.data = r.data;
        res.error = false;
        return res
      }),
      catchError(httpErrorHandler),
    );
  }

}
