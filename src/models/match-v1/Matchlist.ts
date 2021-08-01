import { PUUID } from "../../@types/Account";
import { MatchlistEntry } from "./MatchlistEntry";

export class Matchlist {
  puuid: PUUID;
  history: MatchlistEntry[];
}
