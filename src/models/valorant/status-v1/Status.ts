import { IncidentSeverity, MaintenanceStatus, Platforms } from "../../../@types/Status";
import { Content } from "./Content";
import { Update } from "./Update";

export class Status {
  id: number;
  maintenance_status: MaintenanceStatus;
  incident_severity: IncidentSeverity;
  titles: Content[];
  updates: Update[];
  created_at: string;
  archive_at: string;
  updated_at: string;
  platforms: Platforms[];
}
