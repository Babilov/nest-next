export interface IDay {
  id: number;
  day: Date;
  smoked: boolean;
}

export interface IDays {
  days: IDay[];
}
