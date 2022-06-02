import React from 'react';
import { JsonLd, JsonLdProps } from './jsonld';

export interface RoomJsonLdProps extends JsonLdProps {
  name: string;
  description: string;
  maximumAttendeeCapacity: number;
  floorSize: string;
  disambiguatingDescription: string;
  image: ReadonlyArray<string>;
}

function RoomJsonLd({ type = 'Room', keyOverride, ...rest }: RoomJsonLdProps) {
  const data = {
    ...rest,
  };
  return (
    <JsonLd type={type} keyOverride={keyOverride} {...data} scriptKey="room" />
  );
}

export default RoomJsonLd;
