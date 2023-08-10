import { FC } from 'react';

export interface IIcons {
  [key: string]: FC;
}

export interface IContact {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
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
