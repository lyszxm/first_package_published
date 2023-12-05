import { Collection, Token } from '../models/index.js';

export interface IScoringHandler {
  scoreTokens(collection: Collection, tokens: Token[]): number[];
}
