import React from 'react';

const nearbyAttractions = [
  {
    id: 'must-see',
    title: 'Must-See Destinations in Pokhara',
    description:
      'Discover the beautiful places in Pokhara and explore the activities they offer. From serene lakes to adventurous paragliding spots, there is something for everyone!',
    destinations: [
      {
        id: 'phewa-lake',
        title: 'Phewa Lake',
        description:
          'Phewa Lake is the second largest lake in Nepal, known for its scenic beauty and the Tal Barahi Temple located on an island in the lake.',
        image:
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/62/71/2c/the-heart-soul-of-pokhara.jpg?w=1200&h=-1&s=1',

        map: 'https://maps.app.goo.gl/5CLtven4HEzXBDVXA',
        activities: ['Boating', 'Sightseeing'],
      },
      {
        id: 'sarangkot',
        title: 'Sarangkot',
        description:
          'Sarangkot is a hilltop vantage point that offers panoramic views of the Annapurna mountain range and the Pokhara Valley.',
        image:
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/d6/96/35/photo3jpg.jpg?w=1200&h=-1&s=1',

        map: 'https://maps.app.goo.gl/vYPBbyx1twtxgzyg8',
        activities: ['Paragliding', 'Sunrise View'],
      },
      {
        id: 'peace-pagoda',
        title: 'Peace Pagoda',
        description:
          'The World Peace Pagoda is a Buddhist stupa that offers stunning views of the mountains, Phewa Lake, and Pokhara city.',
        image:
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/11/4c/f4/img-20171024-170549-851.jpg?w=1200&h=-1&s=1',

        map: 'https://maps.app.goo.gl/ac5DAiYQyiBrPMH99',
        activities: ['Meditation', 'Hiking'],
      },
      {
        id: 'devis-fall',
        title: "Devi's Fall",
        description:
          "Devi's Fall is a famous waterfall that mysteriously disappears underground, creating an interesting natural phenomenon.",
        image:
          'https://whatthenepal.com/wp-content/uploads/2023/04/Untitled-design-5.jpg',

        map: 'https://maps.app.goo.gl/RDR8aTYFWhATeD1BA',
        activities: ['Sightseeing', 'Photography'],
      },
      {
        id: 'gupteshwor-cave',
        title: 'Gupteshwor Cave',
        description:
          "Gupteshwor Cave is a sacred cave with a shrine dedicated to Lord Shiva, located near Devi's Fall.",
        image:
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/b8/64/82/descent-view.jpg?w=1000&h=-1&s=1',

        map: 'https://maps.app.goo.gl/sfEvezDEq7U7o55MA',
        activities: ['Cave Exploration', 'Spiritual Visit'],
      },
      {
        id: 'international-mountain-museum',
        title: 'International Mountain Museum',
        description:
          'The International Mountain Museum showcases the history, culture, and achievements of the Himalayan climbers and the mountains.',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/USAID_Measuring_Impact_Conservation_Enterprise_Retrospective_%28Nepal%3B_Asian_Network_for_Sustainable_Agriculture_and_Bioresrouces%29_%2840248952212%29.jpg/1280px-USAID_Measuring_Impact_Conservation_Enterprise_Retrospective_%28Nepal%3B_Asian_Network_for_Sustainable_Agriculture_and_Bioresrouces%29_%2840248952212%29.jpg',

        map: 'https://maps.app.goo.gl/hTH8eguAZ6YJun2k7',
        activities: ['Educational Tour', 'Museum Visit'],
      },
      {
        id: 'seti-river-gorge',
        title: 'Seti River Gorge',
        description:
          'The Seti River Gorge is a deep, narrow gorge carved by the Seti River, offering breathtaking views and a sense of adventure.',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/USAID_Measuring_Impact_Conservation_Enterprise_Retrospective_%28Nepal%3B_Asian_Network_for_Sustainable_Agriculture_and_Bioresrouces%29_%2840248952212%29.jpg/1280px-USAID_Measuring_Impact_Conservation_Enterprise_Retrospective_%28Nepal%3B_Asian_Network_for_Sustainable_Agriculture_and_Bioresrouces%29_%2840248952212%29.jpg',

        map: 'https://maps.app.goo.gl/ifPooK9LiWCZrmAs8',
        activities: ['Sightseeing', 'Photography'],
      },
      {
        id: 'mahendra-cave',
        title: 'Mahendra Cave',
        description:
          'Mahendra Cave is a large limestone cave located near Pokhara, known for its stalactites and stalagmites.',
        image:
          'https://cdn.getyourguide.com/img/tour/6426c17b83594.jpeg/145.jpg',

        map: 'https://maps.app.goo.gl/5CLtven4HEzXBDVXA',
        activities: ['Cave Exploration', 'Photography'],
      },
      {
        id: 'begnas-tal',
        title: 'Begnas Tal',
        description:
          'Begnas Tal is a freshwater lake located near Pokhara, known for its tranquil surroundings and boating opportunities.',
        image:
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/6b/c9/b3/begnas-lake.jpg?w=800&h=-1&s=1',

        map: 'https://maps.app.goo.gl/5CLtven4HEzXBDVXA',
        activities: ['Boating', 'Sightseeing'],
      },
      {
        id: 'bindabasini-temple',
        title: 'Bindabasini Temple',
        description:
          'Bindabasini Temple is a historic Hindu temple located in the heart of Pokhara, dedicated to the goddess Durga.',
        image:
          'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMYx9H8iLaGB23LuI0fHIZYYMriVTRbffx8l_gBq9C9I-iiZbgvRdrRHU_fcZ1hY1jvjpCE_DDI_o2ITb9DiMBci2rFNNUKIreFs3R2l6M5lD1XEY0VFNlTplyXawcUyEiYOzc2_1A2nx7/w1600/Bindabasini+Temple.jpg',

        map: 'https://maps.app.goo.gl/5CLtven4HEzXBDVXA',
        activities: ['Religious Visit', 'Cultural Experience'],
      },
    ],
  },
];

const { title, description, destinations } = nearbyAttractions[0];

const MustSee: React.FC = () => {
  return (
    <main className="px-5">
      <header className="mx-auto mb-16 mt-12 max-w-3xl space-y-6 px-4 text-center">
        <h1 className="text-2xl font-bold text-dark md:text-3xl lg:text-4xl">
          {title}
        </h1>
        <p className="text-justify text-base text-dark/60 md:text-center">
          {description}
        </p>
      </header>
      <section className="space-y-24">
        {destinations.map((destination, index) => (
          <div
            key={destination.id}
            className={`flex flex-col items-center justify-center ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'
            } md:gap-16`}
          >
            <img
              src={destination.image}
              alt={destination.title}
              className="h-64 w-full flex-1 object-cover shadow-md lg:h-[32rem]"
            />
            <div className="px-4 md:flex-1">
              <h3 className="sticky top-0 mb-2 bg-inherit pb-2 pt-8 text-xl font-semibold md:pt-4">
                {destination.title}
              </h3>
              <p className="text-sm text-gray-800 md:text-base">
                {destination.description}
              </p>
              <a
                href={destination.map}
                target="_blank"
                rel="noopener noreferrer"
                className="group mb-12 mt-4 flex origin-left items-center gap-1 font-semibold text-logo-maroon underline underline-offset-2 transition-all hover:underline-offset-1"
              >
                Get Direction
              </a>
              <ul className="flex flex-wrap items-center gap-6">
                {destination.activities.map((activity) => (
                  <li
                    key={activity}
                    className="relative flex items-center gap-2 overflow-hidden border border-logo-maroon px-4 py-2 font-medium text-logo-maroon"
                  >
                    {/* <div className="absolute inset-0 z-10 bg-gradient-to-r from-dark/80 to-dark/20 opacity-30" /> */}
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default MustSee;
