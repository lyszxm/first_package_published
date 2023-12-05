import { TokenRankingFeatures } from './token-ranking-features.js';
import { Token } from './token.js';

export type TokenRarity = {
  score: number;
  tokenFeatures: TokenRankingFeatures;
  token: Token;
  rank: number;
};
