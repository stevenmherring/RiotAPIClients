import { Status } from "./Status";

export class PlatformData {
  id: string;
  name: string;
  locales: string[];
  maintenances: Status[];
  incidents: Status[];
}
