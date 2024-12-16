import { Component } from "@angular/core";
import { CarouselService } from "../../service/carousel/carousel.service";

@Component({
  selector: 'app-carouserl',
  templateUrl: './carousel.component.html',

})

export class CarouselComponent {
  productos: any[] = [];
  responsiveOptions: any[] | undefined;


  constructor(private carouselService: CarouselService) {

  }
  ngOnInit() {
    this.carouselService.getProducts().then(productos => { this.productos = productos; console.log(productos) });
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      }
    ];
  }

}