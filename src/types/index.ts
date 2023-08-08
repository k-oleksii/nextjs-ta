import { FC } from 'react';

export interface IIcons {
  [key: string]: FC;
}

export enum EnumIcons {
  cart = 'cart',
  check = 'check',
  discord = 'discord',
  email = 'email',
  location = 'location',
  phone = 'phone',
  twitter = 'twitter',
  user = 'user',
  inst = 'inst',
}
