import { PUUID } from "../../../@types/Account";
import { PlayerLocations } from "./PlayerLocations";
import { PlayerRoundStats } from "./PlayerRoundStats";

export class RoundResult {
  roundNum: number;
  roundResult: string;
  roundCeremoy: string;
  winningTeam: string;
  /**
   * PUUID of player
   */
  bombPlanter: PUUID;
  /**
   * PUUID of player
   */
  bombDefuser: PUUID;
  plantRoundTime: number;
  plantPlayerLocations: PlayerLocations[];
  plantLocation: Location;
  plantSite: string;
  defuseRoundTime: number;
  defusePlayerLocations: PlayerLocations[];
  defuseLocation: Location;
  playerStats: PlayerRoundStats[];
  roundResultCode: string;
}
