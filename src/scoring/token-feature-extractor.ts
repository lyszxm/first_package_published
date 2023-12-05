import { Collection, Token } from '../models/index.js';
import { TokenRankingFeatures } from '../models/token-ranking-features.js';

export class TokenFeatureExtractor {
  static extractUniqueTraitCount(collection: Collection, token: Token): TokenRankingFeatures {
    let uniqueTraitCount = 0;

    const traits = Array.from(token.metadata.stringTraits.values());
    for (const trait of traits) {
      const count = collection.totalTokensWithTrait(trait);
      if (count === 1) {
        uniqueTraitCount += 1;
      }
    }

    return { uniqueTraitCount: uniqueTraitCount };
  }
}
