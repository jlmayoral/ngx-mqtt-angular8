import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Observable } from 'rxjs';

import {
  NgxMqttModule,
  IMqttServiceOptions,
  NgxMqttService,
  IMqttMessage
} from './ngx-mqtt/ngx-mqtt.module'; // 'ngx-mqtt';

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  connectOnCreate: true,
  hostname: '10.0.0.100',  // host of ws of mosquitto
  port: 1884, // port of ws of mosquitto
  path: '/',
  protocol: 'ws'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMqttModule.forRoot(MQTT_SERVICE_OPTIONS),
  ],
//  providers: [[MqttService, {provide: MQTT_SERVICE_OPTIONS, useValue: 'http://localhost:8080/users'}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
