import { ImgurService } from './services/imgur.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SettingsService } from './services/settings.service';
import { ImagesComponent } from './components/images/images.component';
import { ImageComponent } from './components/images/image.component';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    ImagesComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
  ],
  entryComponents: [
    ImageComponent,
  ],
  providers: [ImgurService, SettingsService],
  bootstrap: [AppComponent],
})
export class AppModule { }
