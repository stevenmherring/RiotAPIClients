import { Shard } from "../../../@types/Account";
import { Player } from "./Player";

export class Leaderboard {
  /**
   * The shard for the given leaderboard.
   */
  shard: Shard;
  /**
   * The act id for the given leaderboard. Act ids can be found using the val-content API.
   */
  actId: string;
  /**
   * The total number of players in the leaderboard.
   */
  totalPlayers: number;
  players: Player[];
}
