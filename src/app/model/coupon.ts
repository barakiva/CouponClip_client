export class Coupon {
  private _id: number;
  private _picUrl: string;
  private _title: string;
  private _location: string;
  private _reviewCount: number;
  private _description: string;
  private _averageStars: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get picUrl(): string {
    return this._picUrl;
  }

  set picUrl(value: string) {
    this._picUrl = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get location(): string {
    return this._location;
  }

  set location(value: string) {
    this._location = value;
  }

  get reviewCount(): number {
    return this._reviewCount;
  }

  set reviewCount(value: number) {
    this._reviewCount = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get averageStars(): number {
    return this._averageStars;
  }

  set averageStars(value: number) {
    this._averageStars = value;
  }
}
