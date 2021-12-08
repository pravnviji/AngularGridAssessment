import { Component, OnInit } from '@angular/core';

import { MediaObserver } from '@angular/flex-layout';
import { MatTableDataSource } from '@angular/material/table';

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
  dataSource!: MatTableDataSource<TtariffDetails>;
  constructor(private tariffService: TariffService, private observableMedia: MediaObserver) {

  }

  ngOnInit(): void {
    this.tariffService.getTariffDetails().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });

  }

  ngAfterContentInit() {
    this.observableMedia.asObservable().subscribe((change) => {
      console.log('ngAfterContentInit');
      console.log(change[0].mqAlias);
      this.deviceSz = change[0].mqAlias;
    });

  }

  applyFilter(filterEvent: any) {
    console.log(filterEvent.target.value);
    this.dataSource.filter = filterEvent.target.value;
  }

}
