import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as tariff from '../../assets/mock/tariff.json';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {


  createDb() {
    return {
      tariff: [
        {
          "id": "1",
          "name": "Montana bonus 12",
          "download": "12",
          "upload": "6",
          "otherbenefits": [
            "C02 tax 2022 included",
            "incl. € 89.96 new customer bonus",
            "12 months limited price guarantee",
            "Optional 24 months price guarantee"
          ],
          "amount": "165.30"
        },
        {
          "id": "2",
          "name": "Vattenfall",
          "download": "10",
          "upload": "3",
          "otherbenefits": [
            "C02 tax 2022 included",
            "incl. 10 € instant bonus",
            "incl. € 174.00 new customer bonus",
            "Optional: tado smart radiator thermostat starter kit V3 +"
          ],
          "amount": "167.37"
        },
        {
          "id": "3",
          "name": "Rhein Power",
          "download": "12",
          "upload": "2",
          "otherbenefits": [
            "C02 tax 2022 included",
            "incl. € 154.21 instant bonus",
            "12 months contract period"
          ],
          "amount": "165.80"
        },
        {
          "id": "4",
          "name": "Shell Energy",
          "download": "10",
          "upload": "3",
          "otherbenefits": [
            "C02 tax 2022 included",
            "incl. € 20.00 new customer bonus",
            "12 month limited price guarantee",
            "12 months contract period"
          ],
          "amount": "171.80"
        },
        {
          "id": "5",
          "name": "Montana bonus 12",
          "download": "12",
          "upload": "6",
          "otherbenefits": [
            "C02 tax 2022 included",
            "incl. € 89.96 new customer bonus",
            "12 months limited price guarantee",
            "Optional 24 months price guarantee"
          ],
          "amount": "165.30"
        },
        {
          "id": "6",
          "name": "Vattenfall",
          "download": "10",
          "upload": "3",
          "otherbenefits": [
            "C02 tax 2022 included",
            "incl. 10 € instant bonus",
            "incl. € 174.00 new customer bonus",
            "Optional: tado smart radiator thermostat starter kit V3 +"
          ],
          "amount": "167.37"
        }
      ]
    }

  }
}
