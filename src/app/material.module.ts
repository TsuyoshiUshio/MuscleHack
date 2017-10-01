import { NgModule } from '@angular/core';

import {
  MdButtonModule,
  MdMenuModule,
  MdToolbarModule,
  MdIconModule,
  MdCardModule,
  MatInputModule,
  MdNativeDateModule,
  MatDatepickerModule,
  MAT_DATE_LOCALE,
} from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MatInputModule,
    MdNativeDateModule,
    MatDatepickerModule,
  ],
  exports: [
    MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MatInputModule,
    MdNativeDateModule,
    MatDatepickerModule,
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'ja-JP'},
  ],
})
export class MaterialModule {}