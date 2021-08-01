import { PUUID } from "../../../@types/Account";

export class Player {
  /**
   * This field may be omitted if the player has been anonymized.
   */
  puuid: PUUID;
  /**
   * This field may be omitted if the player has been anonymized.
   */
  gameName: string;
  /**
   * This field may be omitted if the player has been anonymized.
   */
  tagLine: string;
  leaderboardRank: number;
  rankedRating: number;
  numberOfWins: number;
}
