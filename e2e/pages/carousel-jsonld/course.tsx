import React from 'react';
import { CarouselJsonLd } from '../../../src';
import Links from '../../components/links';

const Course = () => (
  <>
    <h1>Carousel Course JSON-LD</h1>
    <CarouselJsonLd
      ofType="course"
      data={[
        {
          courseName: 'Course Name',
          description: 'Introductory CS course laying out the basics.',
          abstract: 'Introductory CS course laying out the basics',
          author: {
            familyName: 'John',
            givenName: 'Doe',
            jobTitle: 'Software engineer',
            telephone: '+97699888811',
            email: 'turuu@dev.mn',
            description: '',
            subjectOf: {},
          },
          url: '',
          contentLocation: '',
          educationalLevel: '',
          numberOfCredits: '',
          provider: {
            name: 'Course Provider',
            url: 'https//www.example.com/provider',
          },
        },
        {
          courseName: 'Course Name',
          description: 'Introductory CS course laying out the basics.',
          abstract: 'Introductory CS course laying out the basics',
          author: {
            familyName: 'John',
            givenName: 'Doe',
            jobTitle: 'Software engineer',
            telephone: '+97699888811',
            email: 'turuu@dev.mn',
            description: '',
            subjectOf: {},
          },
          url: '',
          contentLocation: '',
          educationalLevel: '',
          numberOfCredits: '',
          provider: {
            name: 'Course Provider',
            url: 'https//www.example.com/provider',
          },
        },
      ]}
    />
    <Links />
  </>
);

export default Course;
