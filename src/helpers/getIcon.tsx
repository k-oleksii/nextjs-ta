import { icons } from '@/icons';

export const getIcon = (iconName: string) => {
  const IconComponent = icons[iconName];

  if (IconComponent) {
    return <IconComponent />;
  }

  return null;
};
