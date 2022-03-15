import type { Person } from 'src/types';

export function setPerson(person: Person) {
  if (person) {
    return {
      '@type': 'Person',
      familyName: person.familyName,
      givenName: person.givenName,
      description: person.description,
      email: person.email,
      telephone: person.telephone,
      jobTitle: person.jobTitle,
      image: person.image,
    };
  }

  return undefined;
}
