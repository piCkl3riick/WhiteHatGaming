export class Game {
  constructor(
    public categories: string,
    public name: string,
    public image: string,
    public id: string,
    public amount?: number
    ) {}
}

export class Jackpot {
  constructor(
   public game: string,
   public amount: number
  ) {}
}

