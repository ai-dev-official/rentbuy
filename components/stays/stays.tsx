
  export interface HomeStay {
    id: number;
    name: string;
    images: string[];
    rating: number;
    country: string;
    city: string;
    dates: {
      month: string;
      begin: number;
      end: number;
    };
    price: number;
    stayType: string;
  }
  




export const stays = [
    {
      id: 0,
      name: 'Sunset Villa',
      images: [
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677939722/upload/jkhkqk8c0zk5nl7znpvj.jpg',
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677939722/upload/prdqkq3ccdp34srxeu5m.jpg',
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677938896/upload/xn3fkin9o1bexstjsjxo.webp',
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677938895/upload/yk36xc9txpamhheuxqh2.webp',
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1661101218/samples/people/bicycle.jpg',
      ],
      rating: 2.6,
      city: 'Madrid',
      country: 'Spain',
      dates: { month: 'Oct', begin: 10, end: 20 },
      price: 250,
      stayType: 'Entire Villa',
    },
    {
      id: 1,
      name: 'Mountain Retreat',
      images: [
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677939722/upload/prdqkq3ccdp34srxeu5m.jpg',
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677939722/upload/ci9iwb8aoezzro1desld.jpg',
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677938896/upload/m6q1hovlweat1zvb5sf6.webp',
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677938895/upload/edtalg3eyh1mghn2qf1j.webp',
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1661101233/cld-sample-2.jpg',
      ],
      rating: 4.7,
      city: 'Geneva',
      country: 'Switzerland',
      dates: { month: 'Nov', begin: 5, end: 15 },
      price: 300,
      stayType: 'Cabin',
    },
    {
      id: 2,
      name: 'City Loft',
      images: [
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677939722/upload/ci9iwb8aoezzro1desld.jpg',
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677939722/upload/riyqfbjc8ij8ctyb40il.jpg',
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677938896/upload/wwlqxyvaj7x93m1qbows.webp',
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677938896/upload/fyenbpclzhxy9n4zsglt.webp',
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1661166924/upload/gtp8mtrpkurqbmpat2ce.jpg',
      ],
      rating: 4.9,
      city:'New York',
      country: 'USA',
      dates: { month: 'Dec', begin: 1, end: 10 },
      price: 180,
      stayType: 'Apartment',
    },
    {
      id: 3,
      name: 'Beach House',
      images: [
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677939722/upload/riyqfbjc8ij8ctyb40il.jpg',
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677939722/upload/xy8p2xcamrphkjlm4lia.jpg',
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677938895/upload/ognjk7gfqkxhhym9fu8b.webp',
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677938895/upload/atenel1fqmexaomvalpz.webp',
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1661166924/upload/hz9g53mahbzmtlqlkhnq.jpg',
      ],
      rating: 4.6,
      city: 'Sydney',
      country: 'Australia',
      dates: { month: 'Jan', begin: 15, end: 25 },
      price: 320,
      stayType: 'Entire House',
    },
    {
      id: 4,
      name: 'Countryside Cottage',
      images: [
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677938895/upload/pfpit6mcoe798hh3r8pf.webp',
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677938896/upload/sxsgl4vhvteunu8ysirx.jpg',
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677938895/upload/eocmtcw0gzlloomdpvtq.webp',
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1661166925/upload/sybd81znehoya0kyfksr.jpg',
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677939722/upload/oib9btodfulkeedx1waq.jpg',
      ],
      rating: 4.7,
      city: 'Lyon',
      country: 'France',
      dates: { month: 'Feb', begin: 20, end: 28 },
      price: 220,
      stayType: 'Cottage',
    },
    {
      id: 5,
      name: 'Desert Oasis',
      images: [
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677938896/upload/xn3fkin9o1bexstjsjxo.webp',
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677939722/upload/xy8p2xcamrphkjlm4lia.jpg',
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677938895/upload/fyenbpclzhxy9n4zsglt.webp',
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677939722/upload/jkhkqk8c0zk5nl7znpvj.jpg',
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1661166925/upload/sybd81znehoya0kyfksr.jpg',
      ],
      rating: 4.5,
      city: 'Rabat',
      country: 'Morocco',
      dates: { month: 'Mar', begin: 1, end: 8 },
      price: 280,
      stayType: 'Tent',
    },
    {
      id: 6,
      name: 'Lakefront Cabin',
      images: [
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677938895/upload/fprrj8wzft22gsybsusz.webp',
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677939722/upload/prdqkq3ccdp34srxeu5m.jpg',
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677938896/upload/xn3fkin9o1bexstjsjxo.webp',
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677938895/upload/eocmtcw0gzlloomdpvtq.webp',
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677938896/upload/sxsgl4vhvteunu8ysirx.jpg',
      ],
      rating: 4.9,
      city: 'Alberta',
      country: 'Canada',
      dates: { month: 'Apr', begin: 10, end: 20 },
      price: 350,
      stayType: 'Cabin',
    },
    {
      id: 7,
      name: 'Urban Flat',
      images: [
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677938895/upload/yk36xc9txpamhheuxqh2.webp',
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677939722/upload/ci9iwb8aoezzro1desld.jpg',
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677938895/upload/pfpit6mcoe798hh3r8pf.webp',
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677938896/upload/m6q1hovlweat1zvb5sf6.webp',
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677938896/upload/fyenbpclzhxy9n4zsglt.webp',
      ],
      rating: 4.6,
      city: 'Bayern',
      country: 'Germany',
      dates: { month: 'May', begin: 15, end: 22 },
      price: 240,
      stayType: 'Apartment',
    },
    {
      id: 8,
      name: 'Coastal Bungalow',
      images: [
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677939722/upload/oib9btodfulkeedx1waq.jpg',
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677938895/upload/edtalg3eyh1mghn2qf1j.webp',
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677938895/upload/wwlqxyvaj7x93m1qbows.webp',
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677938895/upload/ognjk7gfqkxhhym9fu8b.webp',
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677938895/upload/atenel1fqmexaomvalpz.webp',
      ],
      rating: 4.8,
      city: 'Bangkok',
      country: 'Thailand',
      dates: { month: 'Jun', begin: 5, end: 12 },
      price: 260,
      stayType: 'Bungalow',
    },
    {
      id: 9,
      name: 'Forest Lodge',
      images: [
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677938895/upload/fyenbpclzhxy9n4zsglt.webp',
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677938895/upload/eocmtcw0gzlloomdpvtq.webp',
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1677938896/upload/xn3fkin9o1bexstjsjxo.webp',
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1661101233/cld-sample-2.jpg',
        'https://res.cloudinary.com/dtxze8vwn/image/upload/v1661166924/upload/gtp8mtrpkurqbmpat2ce.jpg',
      ],
      rating: 4.7,
      city: 'Oslo',
      country: 'Norway',
      dates: { month: 'Jul', begin: 1, end: 10 },
      price: 310,
      stayType: 'Lodge',
    },
  ];
  

  