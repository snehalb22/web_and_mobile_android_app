import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadpicturePage } from './uploadpicture.page';

const routes: Routes = [
  {
    path: '',
    component: UploadpicturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadpicturePageRoutingModule {}
