export type CollectionTrait = {
  trait: string;
  totalTokens: number;
};

export function attribute(bool: boolean) {
  let test: CollectionTrait | object = {};
  if (bool) {
    test = {
      trait: 'string',
      totalTokens: 0,
    };
  } else {
    test = {
      trait: 'string',
      totalTokens: 1,
    };
  }
  return test;
}

export class add {
  private nam: string | undefined;
  private num: number | undefined;
  constructor(num: number, nam: string) {
    this.num = num;
    this.nam = nam;
  }
  getResult(): undefined | string {
    if (!this.nam || !this.num) return undefined;
    return this.nam + this.num;
  }
}
