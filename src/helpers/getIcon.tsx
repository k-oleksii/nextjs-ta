// Icons
import { icons } from '@/icons';

// Get icons from a set and return as a component
export const getIcon = (iconName: string) => {
  const IconComponent = icons[iconName];

  if (IconComponent) {
    return <IconComponent />;
  }

  return null;
};
