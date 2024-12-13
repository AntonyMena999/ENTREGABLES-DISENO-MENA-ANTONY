import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  status: string[] = ['OUTOFSTOCK','INSTOCK','LOWSTOCK'];

  

  constructor(private http:HttpClient) {}

  getProducts(){
    return this.http
      .get<any>('assets/config/carousel.json')
      .toPromise()
      .then((res)=> <any[]>res.data)
      .then((data)=>{
        console.log(data);
        return data;
      });
  }
}
