import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Logger } from 'src/app/core/logger.service';
import { TariffService } from '../../services/tariff.service';

import { TariffComponent } from './tariff.component';

import {
  ɵMatchMedia as MatchMedia,
  ɵMockMatchMedia as MockMatchMedia,
} from '@angular/flex-layout';

class TariffServiceStub {
  mockData = {
    id: '1',
    name: 'Montana bonus 12',
    download: '12',
    upload: '6',
    otherbenefits: [
      'C02 tax 2022 included',
      'incl. € 89.96 new customer bonus',
      '12 months limited price guarantee',
      'Optional 24 months price guarantee',
    ],
    amount: '165.30',
  };
  getTariffDetails() {
    return of(this.mockData);
  }
  mapTariffDetails() {
    return this.mockData;
  }
}
class MockLoggerService {
  log() {
    return of(true);
  }
  debug() {
    return of(true);
  }
}

class MockMediaObserver {
  asObservable() {
    return of([
      {
        mqAlias: 'xl',
      },
    ]);
  }
  isActive() {
    return of(true);
  }
  subscribe() {
    return of([
      {
        mqAlias: 'sm',
      },
    ]);
  }
}

describe('TariffComponent', () => {
  let component: TariffComponent;
  let fixture: ComponentFixture<TariffComponent>;
  let logger: Logger;
  let matchMedia: MockMatchMedia;
  let mediaController: MockMatchMedia;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TariffComponent],
      providers: [
        { provide: TariffService, useClass: TariffServiceStub },
        { provide: MatchMedia, useClass: MockMatchMedia },
        { provide: Logger, userClass: MockLoggerService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TariffComponent);
    component = fixture.componentInstance;
    ('');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnit :: should datasource get loaded', () => {
    component.ngOnInit();
    expect(component.dataSource).not.toBeNull();
    expect(component.dataSource).not.toBeUndefined();
  });

  xit('applyFilter :: Should update the datasource', () => {
    const mockEvent = {
      target: {
        value: 'Montana bonus 12',
      },
    };
    component.applyFilter(mockEvent);
    console.log("ApplyFilter");
    console.log(component.dataSource.filter);
    console.log(mockEvent.target.value);
    expect(component.dataSource.filter).toEqual(mockEvent.target.value);
  });
});
