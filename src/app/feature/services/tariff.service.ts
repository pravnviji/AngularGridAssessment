import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpRequestService } from 'src/app/core/http/http-request.service';
import { Logger } from 'src/app/core/logger.service';
import { TtariffDetails } from '../model/tariff-details';

@Injectable({
  providedIn: 'root'
})

export class TariffService {

  constructor(private http: HttpRequestService, private logger: Logger) { }

  private tariffUrl = 'api/tariff/';

  getTariffDetails(): Observable<TtariffDetails[]> {
    this.logger.debug('getTariffDetails');
    return this.http
      .get(this.tariffUrl)
      .pipe(map((result) => this.mapTariffDetails(result as TtariffDetails[])));
  }

  mapTariffDetails(result: TtariffDetails[]): TtariffDetails[] {
    this.logger.debug('mapTariffDetails');
    this.logger.debug('result', result);
    return result;
  }

}
