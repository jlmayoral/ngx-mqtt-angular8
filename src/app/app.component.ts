/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { NgxMqttService, IMqttMessage } from './ngx-mqtt/ngx-mqtt.module';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'mqtt-ng';

    private mqttObservable: Observable<IMqttMessage>;
    private subscription: Subscription;
//    private subscription: Subscription;
    public message: string;
    public msgsList: string;

    constructor(private mqttService: NgxMqttService) {
        this.mqttObservable = this.mqttService.observe('/home/cocina/sonoff/#');
        this.msgsList = '';
        this.subscription = this.mqttObservable.subscribe((msg: IMqttMessage) => {
            console.log(msg);
            console.log('Message: ' + msg.payload.toString());
            this.msgsList += 'topic: "' + msg.topic + '", message: >' + msg.payload.toString() + '<\n';
        });
    }
    ngOnInit(): void {
    }

    public unsafePublish(topic: string, message: string): void {
        this.mqttService.unsafePublish(topic, message, { qos: 1, retain: true });
    }

    public toogle(cmd: string) {
        this.unsafePublish('/home/cocina/sonoff/relay/0/set', cmd);
    }

    public ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    public cleanArea() {
        this.msgsList = '';
    }
}

