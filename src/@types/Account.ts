/**
 * Player Universally Unique IDentifier
 * https://www.riotgames.com/en/DevRel/player-universally-unique-identifiers-and-a-new-security-layer
 */
export type PUUID = string;

/**
 * Another way to identify your account to RIOT APIs.
 * TODO: This needs to be understood better, as of now it's purely here for completeness
 */
export type Authorization = string;

/**
 * Different games supported by the Accounts api
 */
export enum Game {
  val = "val",
  lor = "lor",
}

/**
 * Identifiers for the regions an account may belong to, known as shards
 */
export enum Shard {
  na = "na",
  br = "br",
  emea = "emea",
  jp = "jp",
  kr = "kr",
  latam = "latam",
  sea = "sea",
}
