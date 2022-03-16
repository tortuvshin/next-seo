import React from 'react';

import type { Person, Provider } from 'src/types';
import { setPerson } from 'src/utils/schema/setPerson';
import { setProvider } from 'src/utils/schema/setProvider';

import { JsonLd, JsonLdProps } from './jsonld';

export interface CourseJsonLdProps extends JsonLdProps {
  courseName: string;
  url: string;
  description: string;
  abstract: string;
  numberOfCredits: string;
  educationalLevel: string;
  contentLocation: string;
  author: Person;
  provider: Provider;
}

function CourseJsonLd({
  type = 'Course',
  keyOverride,
  courseName,
  provider,
  author,
  ...rest
}: CourseJsonLdProps) {
  const data = {
    name: courseName,
    ...rest,
    provider: setProvider(provider),
    author: setPerson(author),
  };
  return (
    <JsonLd
      type={type}
      keyOverride={keyOverride}
      {...data}
      scriptKey="course"
    />
  );
}

export default CourseJsonLd;
