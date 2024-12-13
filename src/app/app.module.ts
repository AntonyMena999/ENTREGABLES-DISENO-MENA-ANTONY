import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//imports de primeng
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';

import { MenubarModule } from 'primeng/menubar';

import { SplitButtonModule } from 'primeng/splitbutton';

//GALERIA
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';
import { BotonesComponent } from './botones/botones.component';
import { GaleryComponent } from './galery/galery.component';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { MensajeriaComponent } from './mensajeria/mensajeria.component';
import { ToastModule } from 'primeng/toast';
import { CarouselComponent } from './component/carousel/carousel.component';
import { CarouselService } from './service/carousel/carousel.service';
import { CarouselModule } from 'primeng/carousel';
import { HttpClientModule } from '@angular/common/http';
import { MessageModule } from 'primeng/message';
import { CardComponent } from './component/card/card.component';
import { CardModule } from 'primeng/card';
import { CuadrosComponent } from './cuadros/cuadros.component';





@NgModule({
  declarations: [		
    AppComponent,
    BotonesComponent,
      GaleryComponent,
      MensajeriaComponent,
      CarouselComponent,
      CardComponent,
      CuadrosComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    SplitButtonModule,
    MenubarModule,
    ImageModule,
    GalleriaModule,
    MessagesModule,
    MessageModule, 
    ToastModule,
    CarouselModule,
    HttpClientModule,  
    CardModule,

  ],
  providers: [MessageService, CarouselService],
  bootstrap: [AppComponent]
})
export class AppModule { }
