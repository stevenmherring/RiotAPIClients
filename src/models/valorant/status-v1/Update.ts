import { PublishLocations } from "../../../@types/Status";
import { Content } from "./Content";

export class Update {
  id: number;
  author: string;
  publish: boolean;
  publish_locations: PublishLocations[];
  translations: Content[];
  created_at: string;
  updated_at: string;
}
