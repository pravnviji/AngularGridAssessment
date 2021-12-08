import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { TariffComponent } from './components/tariff/tariff.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

const MathModules = [
  MatTableModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule
];
@NgModule({
  declarations: [TariffComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ...MathModules
  ],
  exports: [TariffComponent],
})
export class FeatureModule { }
