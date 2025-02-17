import React from 'react';

import { JsonLd, JsonLdProps } from './jsonld';

import { CourseJsonLdProps, RecipeJsonLdProps, setProvider } from 'src/index';
import type { Review, AggregateRating } from 'src/types';
import { setReviews } from 'src/utils/schema/setReviews';
import { setAuthor } from 'src/utils/schema/setAuthor';
import { setNutrition } from 'src/utils/schema/setNutrition';
import { setAggregateRating } from 'src/utils/schema/setAggregateRating';
import { setVideo } from 'src/utils/schema/setVideo';
import { setInstruction } from 'src/utils/schema/setInstruction';
import { NewsArticleJsonLdProps } from './newsarticle';
import { setPublisher } from 'src/utils/schema/setPublisher';
import { PersonJsonLdProps } from './person';
import { setCreativeWork } from 'src/utils/schema/setCreativeWork';
import { setPerson } from 'src/utils/schema/setPerson';
import { RoomJsonLdProps } from './room';

type Director = {
  name: string;
};

interface DefaultDataProps {
  url: string;
}

interface ExtendedCourseJsonLdProps
  extends DefaultDataProps,
    CourseJsonLdProps {}
interface ExtendedPersonJsonLdProps
  extends DefaultDataProps,
    PersonJsonLdProps {}

interface ExtendedRecipeJsonLdProps
  extends DefaultDataProps,
    RecipeJsonLdProps {}
interface ExtendedNewsArticleJsonLdProps
  extends DefaultDataProps,
    NewsArticleJsonLdProps {}

interface ExtendedRoomJsonLdProps extends DefaultDataProps, RoomJsonLdProps {}

export interface MovieJsonLdProps {
  name: string;
  url: string;
  image: string;
  dateCreated?: string;
  director?: Director | Director[];
  review?: Review;
  aggregateRating?: AggregateRating;
}

export interface CarouselJsonLdProps extends JsonLdProps {
  ofType:
    | 'default'
    | 'movie'
    | 'recipe'
    | 'course'
    | 'person'
    | 'newsArticle'
    | 'room';
  data:
    | any
    | DefaultDataProps[]
    | MovieJsonLdProps[]
    | ExtendedCourseJsonLdProps[]
    | ExtendedRecipeJsonLdProps[]
    | ExtendedPersonJsonLdProps[]
    | ExtendedNewsArticleJsonLdProps[]
    | ExtendedRoomJsonLdProps;
}

function CarouselJsonLd({
  type = 'Carousel',
  keyOverride,
  ofType,
  data,
}: CarouselJsonLdProps) {
  function generateList(
    data: CarouselJsonLdProps['data'],
    ofType: CarouselJsonLdProps['ofType'],
  ) {
    switch (ofType) {
      case 'default':
        return (data as DefaultDataProps[]).map((item, index) => ({
          '@type': 'ListItem',
          position: `${index + 1}`,
          url: item.url,
        }));

      case 'course':
        return (data as ExtendedCourseJsonLdProps[]).map(
          ({ courseName, provider, author, ...rest }, index) => ({
            '@type': 'ListItem',
            position: `${index + 1}`,
            item: {
              '@context': 'https://schema.org',
              '@type': 'Course',
              ...rest,
              name: courseName,
              author: setPerson(author),
              provider: setProvider(provider),
            },
          }),
        );

      case 'room':
        return (data as ExtendedRoomJsonLdProps[]).map(
          ({ ...rest }, index) => ({
            '@type': 'ListItem',
            position: `${index + 1}`,
            item: {
              '@context': 'https://schema.org',
              '@type': 'Room',
              ...rest,
            },
          }),
        );

      case 'movie':
        return (data as MovieJsonLdProps[]).map((item, index) => ({
          '@type': 'ListItem',
          position: `${index + 1}`,
          item: {
            '@context': 'https://schema.org',
            '@type': 'Movie',
            name: item.name,
            url: item.url,
            image: item.image,
            dateCreated: item.dateCreated,
            director: item.director
              ? Array.isArray(item.director)
                ? item.director.map(director => ({
                    '@type': 'Person',
                    name: director.name,
                  }))
                : {
                    '@type': 'Person',
                    name: item.director.name,
                  }
              : undefined,
            review: setReviews(item.review),
          },
        }));

      case 'recipe':
        return (data as ExtendedRecipeJsonLdProps[]).map(
          (
            {
              authorName,
              images,
              yields,
              category,
              calories,
              aggregateRating,
              video,
              ingredients,
              instructions,
              cuisine,
              ...rest
            },
            index,
          ) => ({
            '@type': 'ListItem',
            position: `${index + 1}`,
            item: {
              '@context': 'https://schema.org',
              '@type': 'Recipe',
              ...rest,
              author: setAuthor(authorName),
              image: images,
              recipeYield: yields,
              recipeCategory: category,
              recipeCuisine: cuisine,
              nutrition: setNutrition(calories),
              aggregateRating: setAggregateRating(aggregateRating),
              video: setVideo(video),
              recipeIngredient: ingredients,
              recipeInstructions: instructions.map(setInstruction),
            },
          }),
        );

      case 'person':
        return (data as ExtendedPersonJsonLdProps[]).map((item, index) => ({
          '@type': 'ListItem',
          position: `${index + 1}`,
          item: {
            '@context': 'https://schema.org',
            '@type': 'Person',
            url: item.url,
            name: item.name,
            familyName: item.familyName,
            givenName: item.givenName,
            description: item.description,
            email: item.email,
            telephone: item.telephone,
            jobTitle: item.jobTitle,
            image: item.image,
            subjectOf: item.subjectOf.map(setCreativeWork),
          },
        }));

      case 'newsArticle':
        return (data as ExtendedNewsArticleJsonLdProps[]).map(
          (item, index) => ({
            '@type': 'ListItem',
            position: `${index + 1}`,
            item: {
              '@context': 'https://schema.org',
              '@type': 'NewsArticle',
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': item.url,
              },
              headline: item.title,
              image: item.images,
              articleSection: item.section,
              dateCreated: item.dateCreated || item.datePublished,
              datePublished: item.datePublished,
              dateModified: item.dateModified || item.datePublished,
              author: setAuthor(item.authorName),
              publisher: setPublisher(item.publisherName, item.publisherLogo),
              articleBody: item.body,
            },
          }),
        );
    }
  }

  const d = {
    '@type': 'ItemList',
    itemListElement: generateList(data, ofType),
  };

  return (
    <JsonLd type={type} keyOverride={keyOverride} {...d} scriptKey="Carousel" />
  );
}

export default CarouselJsonLd;
