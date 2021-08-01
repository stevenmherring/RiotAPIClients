import { LocalizedNames } from "../../../mappings/LocalizedNames";

export class ContentItem {
  name: string;
  id: string;
  /**
   * Field is excluded from the response when a locale is set
   */
  localizedNames?: Record<LocalizedNames, string>;
  assetName: string;
  /**
   * This field is only included for maps and games modes. These values are used in the match response.
   */
  assetPath?: string;
}
