import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../services/app-service.service';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent implements OnInit {

  images: any[] | undefined = [];

  responsiveOptions: any[] | undefined;

  constructor(private appService: AppServiceService) { }

  ngOnInit() {
    this.appService.getImages().then((images) => {
      console.log(images);
      this.images = images
    });
    console.log(this.images);
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5
      },
      {
        breakpoint: '768px',
        numVisible: 3
      },
      {
        breakpoint: '560px',
        numVisible: 1
      }
    ];
  }

  onValueChange(event: any) {
    this.images = event; // o el ajuste necesario según el evento
  }



}
