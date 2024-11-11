import * as TbIcons from 'react-icons/tb';
import * as MdIcons from 'react-icons/md';
// import * as IoIcons from 'react-icons/io';
// import * as Io5Icons from 'react-icons/io5';
// import * as FaIcons from 'react-icons/fa';
// import * as GiIcons from 'react-icons/gi';
import { RiInstagramFill } from 'react-icons/ri';

interface IconMap {
  [key: string]: React.ComponentType;
}

const iconMap: IconMap = {
  ...TbIcons,
  ...MdIcons,
  //   ...IoIcons,
  //   ...Io5Icons,
  //   ...FaIcons,
  //   ...GiIcons,
  RiInstagramFill,
};

export const getIconComponent = (
  iconName: string,
): React.ComponentType | null => {
  return iconMap[iconName] || null;
};
