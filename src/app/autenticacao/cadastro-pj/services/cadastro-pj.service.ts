import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment as env } from '../../../../environments/environment';

import { CadastroPj } from '../';

@Injectable()
export class CadastroPjService {

  private readonly PATH: string = 'cadastro-pj';

  constructor(private http: HttpClient) { }

  cadastrar(cadastroPj: CadastroPj): Observable<any> {
    return this.http.post(env.baseApiUrl + this.PATH, cadastroPj);
  }
}
