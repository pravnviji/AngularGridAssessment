import { Component, OnInit } from '@angular/core';

import { MediaObserver } from '@angular/flex-layout';

import { TtariffDetailCols, TtariffDetails } from '../../services/tariff-details';
import { TariffService } from '../../services/tariff.service';


@Component({
  selector: 'app-tariff',
  templateUrl: './tariff.component.html',
  styleUrls: ['./tariff.component.scss']
})
export class TariffComponent implements OnInit {

  deviceSz: string = '';

  displayedColumns = [TtariffDetailCols.id, TtariffDetailCols.name, TtariffDetailCols.downloadhistory, TtariffDetailCols.otherbenefits, TtariffDetailCols.amount];
  tariffData: any;
  constructor(private tariffService: TariffService, private observableMedia: MediaObserver) {

  }

  ngOnInit(): void {
    this.tariffService.getTariffDetails().subscribe((data) => {
      this.tariffData = data;
    });
  }

  ngAfterContentInit() {
    this.observableMedia.asObservable().subscribe((change) => {
      console.log('ngAfterContentInit');
      console.log(change[0].mqAlias);
      this.deviceSz = change[0].mqAlias;
    });
  }

}
