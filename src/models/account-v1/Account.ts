import { PUUID } from "../../@types/Account";

export class Account {
  /**
   * Player Universally Unique IDentifier
   * https://www.riotgames.com/en/DevRel/player-universally-unique-identifiers-and-a-new-security-layer
   */
  puuid: PUUID;

  /**
   * Players game name ie. Lamirp, JC00K
   * This field may be excluded from the response if the account doesn't have a gameName.
   */
  gameName?: string;

  /**
   * Players tag line (tag minus the #) #NA1 -> NA1
   * This field may be excluded from the response if the account doesn't have a tagLine.
   */
  tagLine?: string;
}
