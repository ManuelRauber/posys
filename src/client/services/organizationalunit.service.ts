
import * as _ from 'lodash';

import { OrganizationalUnit } from '../models/organizationalunit';

import { LoggerService } from './logger.service';
import { ApplicationSettingsService } from './settings.service';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class OrganizationalUnitService {

  private url = 'organizationalunit';

  constructor(private http: Http,
              private logger: LoggerService,
              private settings: ApplicationSettingsService) {}

  getAll(): Observable<OrganizationalUnit[]> {
    return this.http.get(this.settings.buildAPIURL(this.url))
      .map((res: Response) => res.json())
      .catch(e => this.logger.observableError(e));
  }

  create(item: OrganizationalUnit): Observable<OrganizationalUnit> {
    return this.http.put(this.settings.buildAPIURL(this.url), item)
      .map((res: Response) => res.json())
      .catch(e => this.logger.observableError(e));
  }

  update(item: OrganizationalUnit): Observable<OrganizationalUnit> {
    return this.http.patch(this.settings.buildAPIURL(this.url, item.id), item)
      .map((res: Response) => res.json())
      .catch(e => this.logger.observableError(e));
  }

  remove(item: OrganizationalUnit) {
    return this.http.delete(this.settings.buildAPIURL(this.url, item.id))
      .map((res: Response) => res.json())
      .catch(e => this.logger.observableError(e));
  }
}
