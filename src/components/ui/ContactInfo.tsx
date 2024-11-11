import React from 'react';
import { Link } from 'react-router-dom';
import useIconOrImage from '../../hooks/useIconOrImage';

const contactInfo = [
  {
    id: 1,
    type: 'location',
    title: 'Lakeside Rd 17, Pokhara 33700 ',
    url: 'https://maps.app.goo.gl/BvAi9VpHiQJ843bf9',
    icon: null,
    image: null,
  },
  {
    id: 2,
    type: 'phone',
    title: '+977-9856022272',
    url: 'tel:++9779856022272',
    icon: null,
    image: null,
  },
  {
    id: 3,
    type: 'email',
    title: 'info@templebellhotel.com',
    url: 'mailto:info@templebellhotel.com',
    icon: null,
    image: null,
  },
  {
    id: 4,
    type: 'social',
    title: 'Facebook',
    url: '#',
    icon: 'MdFacebook',
    image: null,
  },
  {
    id: 5,
    type: 'social',
    title: 'Instagram',
    url: '#',
    icon: 'RiInstagramFill',
    image: null,
  },
];

const ContactInfo: React.FC<{ align: string }> = ({ align }) => {
  return (
    <>
      <ul className={`flex flex-col ${align} gap-1 text-center`}>
        {contactInfo
          .filter((item) => item.type !== 'social')
          .map((item) => (
            <li key={item.id}>
              <a
                href={item.url}
                className="inline-block text-sm font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.title}
              >
                {item.title}
              </a>
            </li>
          ))}
      </ul>

      <ul className={`my-6 flex ${align} gap-4 text-2xl`}>
        {contactInfo
          .filter((item) => item.type === 'social')
          .map((item) => (
            <li key={item.id} className="group">
              <Link
                to={item.url}
                rel="noreferrer noopener"
                aria-label={item.title}
                title={item.title}
                target="_blank"
              >
                {useIconOrImage({
                  icon: item.icon || undefined,
                  image: item.image || undefined,
                  title: item.title,
                  className:
                    'text-2xl transition-all duration-300 ease-linear group-hover:scale-125',
                })}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ContactInfo;
