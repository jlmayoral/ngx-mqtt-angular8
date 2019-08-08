import {
  NgModule,
  ModuleWithProviders,
  InjectionToken
} from '@angular/core';

import { MqttServiceConfig, MqttClientService, IMqttClient, IMqttServiceOptions } from './mqtt.model';

// export * from './mqtt.service'; // changed from mqtt.service
export * from './ngx-mqtt.service'; // changed from mqtt.service
export * from './mqtt.model';

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  connectOnCreate: true,
  hostname: 'localhost',
  port: 1884,
  path: ''
};

// export const MqttServiceConfig = new InjectionToken<IMqttServiceOptions>('NgxMqttServiceConfig');
// export const MqttClientService = new InjectionToken<IMqttClient>('NgxMqttClientService');

@NgModule()
export class NgxMqttModule {
  static forRoot(config: IMqttServiceOptions, client?: IMqttClient): ModuleWithProviders {
    return {
      ngModule: NgxMqttModule,
      providers: [
        {
          provide: MqttServiceConfig,
          useValue: config
        },
        {
          provide: MqttClientService,
          useValue: client
        }
      ]
    };
  }
}
