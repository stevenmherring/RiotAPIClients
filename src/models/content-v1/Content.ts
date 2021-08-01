import { Act } from "./Act";
import { ContentItem } from "./ContentItem";

export class Content {
  version: string;
  characters: ContentItem[];
  maps: ContentItem[];
  chromas: ContentItem[];
  skins: ContentItem[];
  skinLevels: ContentItem[];
  equips: ContentItem[];
  gameModes: ContentItem[];
  sprays: ContentItem[];
  sprayLevels: ContentItem[];
  charms: ContentItem[];
  charmLevels: ContentItem[];
  playerCards: ContentItem[];
  playerTitles: ContentItem[];
  acts: Act[];
}
