import { PUUID } from "../../../@types/Account";
import { Ability } from "./Ability";
import { Damage } from "./Damage";
import { Economy } from "./Economy";
import { Kill } from "./Kill";

export class PlayerRoundStats {
  puuid: PUUID;
  kills: Kill[];
  damage: Damage[];
  score: number;
  economy: Economy;
  ability: Ability;
}
