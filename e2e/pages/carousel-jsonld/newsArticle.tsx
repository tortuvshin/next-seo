import React from 'react';
import { CarouselJsonLd } from '../../../lib';
import Links from '../../components/links';

const NewsArticle = () => (
  <>
    <h1>Carousel News Article JSON-LD</h1>

    <CarouselJsonLd
      ofType="newsArticle"
      data={[
        {
          url: 'https://example.com/newsarticle',
          title: 'News Article headline',
          images: [
            'https://example.com/photos/1x1/photo.jpg',
            'https://example.com/photos/4x3/photo.jpg',
            'https://example.com/photos/16x9/photo.jpg',
          ],
          section: 'politics',
          keywords: 'prayuth, taksin, thai',
          dateCreated: '2015-02-05T08:00:00+08:00',
          datePublished: '2015-02-05T08:00:00+08:00',
          dateModified: '2015-02-05T09:00:00+08:00',
          authorName: 'Jane Blogs',
          publisherName: 'Gary Meehan',
          publisherLogo: 'https://www.example.com/photos/logo.jpg',
          description:
            'This is a mighty good description of this news article.',
          body: 'This is article body of news article',
        },
        {
          url: 'https://example.com/newsarticle-2',
          title: 'News Article headline 2',
          images: [
            'https://example.com/photos/1x1/photo.jpg',
            'https://example.com/photos/4x3/photo.jpg',
            'https://example.com/photos/16x9/photo.jpg',
          ],
          section: 'politics',
          keywords: 'prayuth, taksin, thai',
          dateCreated: '2015-02-05T08:00:00+08:00',
          datePublished: '2015-02-05T08:00:00+08:00',
          dateModified: '2015-02-05T09:00:00+08:00',
          authorName: 'Jane Blogs',
          publisherName: 'Gary Meehan',
          publisherLogo: 'https://www.example.com/photos/logo.jpg',
          description:
            'This is a mighty good description of this news article.',
          body: 'This is article body of news article',
        },
      ]}
    />

    <Links />
  </>
);

export default NewsArticle;
