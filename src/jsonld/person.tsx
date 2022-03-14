import React from 'react';

import type { CreativeWork } from 'src/types';
import { JsonLd, JsonLdProps } from './jsonld';
import { setCreativeWork } from 'src/utils/schema/setCreativeWork';

export interface PersonJsonLdProps extends JsonLdProps {
  familyName: string;
  givenName: string;
  description?: string;
  email?: string;
  telephone: string;
  jobTitle: string;
  image?: string;
  subjectOf: CreativeWork[];
}

function PersonJsonLd({
  type = 'Person',
  keyOverride,
  subjectOf,
  ...rest
}: PersonJsonLdProps) {
  const data = {
    ...rest,
    subjectOf: subjectOf.map(setCreativeWork),
  };
  return (
    <JsonLd
      type={type}
      keyOverride={keyOverride}
      {...data}
      scriptKey="person"
    />
  );
}

export default PersonJsonLd;
