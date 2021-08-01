import { PUUID } from "../../../@types/Account";
import { PlayerStats } from "./PlayerStats";

export class Player {
  puuid: PUUID;
  gameName: string;
  tagLine: string;
  teamId: string;
  partyId: string;
  characterId: string;
  stats: PlayerStats[];
  competitiveTier: number;
  playerCard: string;
  playerTitle: string;
}
