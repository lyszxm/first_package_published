import { Collection, Token, TokenStandard } from '../models/index.js';
import { JaccardDistanceScoringHandler } from './handlers/index.js';
import { IScoringHandler } from './scoring-handler.js';

export class Scorer {
  private handler: IScoringHandler;

  constructor() {
    this.handler = new JaccardDistanceScoringHandler();
  }

  validateCollection(collection: Collection) {
    const allowedStandards = [TokenStandard.ERC721];
    if (!collection.tokenStandards().every((val) => allowedStandards.includes(val))) {
      throw new Error(`GoRarity currently only supports ERC721 standards`);
    }
  }

  /**
   * @description Calculate the score of each token.
   * @param collection
   * @param tokens
   * @returns The scores of each token, which has the same order with tokens.
   */
  scoreTokens(collection: Collection, tokens: Token[]): number[] {
    this.validateCollection(collection);
    return this.handler.scoreTokens(collection, tokens);
  }

  scoreCollection(collection: Collection): number[] {
    this.validateCollection(collection);
    return this.handler.scoreTokens(collection, collection.tokens);
  }
}
