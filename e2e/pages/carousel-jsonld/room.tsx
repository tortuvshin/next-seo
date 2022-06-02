import Links from 'components/links';
import { CarouselJsonLd } from '../../../src';

const Room = () => (
  <>
    <h1>Carousel Room json-ld</h1>
    <CarouselJsonLd
      ofType="room"
      data={[
        {
          name: 'room name',
          description: 'room description',
          maximumAttendeeCapacity: 50,
          floorSize: '50мкв',
          disambiguatingDescription: 'network',
          image: [
            'https://example.com/photos/1x1/photo.jpg',
            'https://example.com/photos/4x3/photo.jpg',
            'https://example.com/photos/16x9/photo.jpg',
          ],
        },
        {
          name: 'room name1',
          description: 'room description1',
          maximumAttendeeCapacity: 70,
          floorSize: '70мкв',
          disambiguatingDescription: 'network2',
          image: [
            'https://example.com/photos/1x1/photo.jpg',
            'https://example.com/photos/4x3/photo.jpg',
            'https://example.com/photos/16x9/photo.jpg',
          ],
        },
      ]}
    />
    <Links />
  </>
);
export default Room;
