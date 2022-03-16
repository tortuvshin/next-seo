import React from 'react';
import { CourseJsonLd } from '../../..';

function Course() {
  return (
    <>
      <h1>Article</h1>
      <CourseJsonLd
        courseName="Course Name"
        description="Introductory CS course laying out the basics."
        abstract="Introductory CS course laying out the basics"
        author={{
          familyName: 'John',
          givenName: 'Doe',
          jobTitle: 'Software engineer',
          telephone: '+97699888811',
          email: 'turuu@dev.mn',
          description: '',
          subjectOf: {},
        }}
        url=""
        contentLocation=""
        educationalLevel=""
        numberOfCredits=""
        provider={{
          name: 'Course Provider',
          url: 'https//www.example.com/provider',
        }}
      />
    </>
  );
}

export default Course;
