import { PUUID } from "../../@types/Account";
import { FinishingDamage } from "./FinishingDamage";
import { PlayerLocations } from "./PlayerLocations";

export class Kill {
  timeSinceGameStartMillis: number;
  timeSinceRoundStartMillis: number;
  killer: PUUID;
  victim: PUUID;
  victimLocation: Location;
  assistants: PUUID[];
  playerLocations: PlayerLocations[];
  finishingDamage: FinishingDamage;
}
