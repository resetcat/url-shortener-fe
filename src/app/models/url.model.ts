export interface UrlModel {
  url: string;
  expiration?: Expiration;
}

export interface Expiration {
  unit: string;
  amount: number;
}

export interface UrlApiResponse {
  url: string;
  expires?: string
}

