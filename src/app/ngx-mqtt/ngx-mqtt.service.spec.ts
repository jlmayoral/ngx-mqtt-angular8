import { TestBed } from '@angular/core/testing';

import { NgxMqttService } from './ngx-mqtt.service';

describe('NgxMqttService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxMqttService = TestBed.get(NgxMqttService);
    expect(service).toBeTruthy();
  });
});
