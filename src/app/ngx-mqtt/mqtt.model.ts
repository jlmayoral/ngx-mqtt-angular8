import { Stream } from 'stream';
import {  InjectionToken } from '@angular/core';

import { MqttClient, IClientOptions, IClientPublishOptions, IPacket } from 'mqtt';

export const MqttServiceConfig = new InjectionToken<IMqttServiceOptions>('NgxMqttServiceConfig');
export const MqttClientService = new InjectionToken<IMqttClient>('NgxMqttClientService');


export enum MqttConnectionState {
  CLOSED,
  CONNECTING,
  CONNECTED
}


export interface IMqttServiceOptions extends IClientOptions {
  /** wether a new connection should be created
   *  on creating an instance of the service */
  connectOnCreate?: boolean;
  /** the hostname of the mqtt broker */
  hostname?: string;
  /** the port to connect with websocket to the broker */
  port?: number;
  /** the path parameters to connect to e.g. `/mqtt` */
  path?: string;
  protocol?: 'wss' | 'ws';
}

export interface IMqttMessage extends IPacket {
  /** the mqtt topic to which this message was published to */
  topic: string;
  /** the payload */
  payload: Uint8Array;
  /** the quality of service */
  qos: number;
  /** if this message is a retained message */
  retain: boolean;
  /** if this message is a duplicate */
  dup: boolean;
}

export interface IPublishOptions extends IClientPublishOptions { }
export interface IOnConnectEvent extends IMqttMessage { }
export interface IOnErrorEvent extends Error {
  type?: string;
}
export interface IOnMessageEvent extends IMqttMessage { }
export interface IOnSubackEvent {
  granted: boolean;
  filter: string;
}

export interface IMqttClient extends MqttClient {
  stream: Stream;
}

export interface IOnPacketsendEvent extends IPacket { }
export interface IOnPacketreceiveEvent extends IPacket { }