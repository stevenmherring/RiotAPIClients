import { Game } from "../@types/Api";
import { BaseClient, BaseClientParams } from "./BaseClient";
import { ContentClientV1, MatchClientV1, RankedClientV1, StatusClientV1 } from "./valorant";

export class ValorantClientV1 extends BaseClient {
  constructor(params: ValorantClientV1Params) {
    super({ ...params, game: Game.VALORANT });
  }
  public readonly ContentClient = new ContentClientV1(this.params);
  public readonly MatchClient = new MatchClientV1(this.params);
  public readonly RankedClientV1 = new RankedClientV1(this.params);
  public readonly StatusClientV1 = new StatusClientV1(this.params);
}

export type ValorantClientV1Params = Omit<BaseClientParams, "game">;
