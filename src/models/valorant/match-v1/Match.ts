import { Coach } from "./Coach";
import { MatchInfo } from "./MatchInfo";
import { Player } from "./Player";
import { RoundResult } from "./RoundResult";
import { Team } from "./Team";

export class Match {
  matchInfo: MatchInfo;
  players: Player[];
  coaches: Coach[];
  teams: Team[];
  roundResults: RoundResult[];
}
