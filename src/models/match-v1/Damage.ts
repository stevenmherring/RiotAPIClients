import { PUUID } from "../../@types/Account";

export class Damage {
  receiver: PUUID;
  damage: number;
  legshots: number;
  bodyshots: number;
  headshots: number;
}
