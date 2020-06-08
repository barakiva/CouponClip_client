import {Merchant} from './merchant';

export class Deal {
  id: number;
  title: string;
  shortTitle: string;
  description: string;
  finePrint: string;
  url: string;
  price: number;
  value: number;
  discountAmount: number;
  discountPercentage: number;
  providerName: string;
  providerSlug: string;
  categoryName: string;
  categorySlug: string;
  imageUrl: string;
  online: boolean;
  createdAt: Date;
  updatedAt: Date;
  merchant: Merchant;
  numberSold: number;
  expiresAt: Date;
}
