import { LocalizedNames } from "../mappings/LocalizedNames";

export class Act {
  name: string;
  /**
   * Field is excluded from the response when a locale is set
   */
  localizedNames?: Record<LocalizedNames, string>;
  id: string;
  isActive: boolean;
}
