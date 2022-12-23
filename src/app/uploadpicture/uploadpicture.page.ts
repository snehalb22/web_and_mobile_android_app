import { Camera } from '@ionic-native/camera/ngx';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploadpicture',
  templateUrl: './uploadpicture.page.html',
  styleUrls: ['./uploadpicture.page.scss'],
})
export class UploadpicturePage  {
  imgURL;
 // latitude=0;
 // longitude=0;

  constructor(private camera :Camera,
    //private geo:Geolocation
    ) {
    
   }


  getCamera()
  {
    this.camera.getPicture(
      {sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType:this.camera.DestinationType.FILE_URI}
      
    ).then((res)=>{
      this.imgURL=res;
    }).catch(e=>{
      console.log(e);
    })
  }
  getGallery(){
    this.camera.getPicture(
      {sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
      ,destinationType:this.camera.DestinationType.DATA_URL}
    ).then((res)=>{
      this.imgURL='data:image/jpeg;base64,'+res;
    }).catch(e=>{
      console.log(e);
    })

  }

  /*getCurrentLocation() {

    this.geo.getCurrentPosition({

      timeout: 10000,

      enableHighAccuracy: true

    }).then((res) => {

      this.latitude = res.coords.latitude;

      this.longitude = res.coords.longitude;

     // this.getAbsoluteLocation();

    }).catch((e) => {

      console.log(e);

    });

  }*/
}

