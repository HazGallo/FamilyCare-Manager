import { AvatarProps } from '@familyCare/common';
import { Avatar } from 'monday-ui-react-core';

export const CustomAvatar = (props: AvatarProps) => {
  const { name, urlAvatar } = props;
  return (
    <Avatar
      ariaLabel={name}
      src={urlAvatar}
      size={Avatar.sizes.LARGE}
      type={Avatar.types.IMG}
    />
  );
};
