import { Game, Shard, PUUID } from "../../@types/Account";

export class ActiveShard {
  /**
   * Player Universally Unique IDentifier
   * https://www.riotgames.com/en/DevRel/player-universally-unique-identifiers-and-a-new-security-layer
   */
  puuid: PUUID;

  /**
   * Short name of the RIOT game ie. val, lor
   */
  game: Game;

  /**
   * Shard the account is active on, this may only be one
   */
  activeShard: Shard;
}
