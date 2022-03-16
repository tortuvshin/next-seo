import React from 'react';
import { PersonJsonLd } from '../../../lib';

function Person() {
  return (
    <>
      <h1>Person</h1>
      <PersonJsonLd
        familyName="John"
        givenName="Doe"
        jobTitle="Software engineer"
        telephone="+97699888811"
        email="turuu@dev.mn"
        description=""
        subjectOf={[{}]}
      />
    </>
  );
}

export default Person;
