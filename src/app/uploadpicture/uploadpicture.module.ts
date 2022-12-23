import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadpicturePageRoutingModule } from './uploadpicture-routing.module';

import { UploadpicturePage } from './uploadpicture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadpicturePageRoutingModule
  ],
  declarations: [UploadpicturePage]
})
export class UploadpicturePageModule {}
