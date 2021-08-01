export class Team {
  /**
   * This is an arbitrary string. Red and Blue in bomb modes. The puuid of the player in deathmatch
   */
  teamId: string;
  won: boolean;
  roundsPlayed: number;
  roundsWon: number;
  /**
   * Team points score. Number of kills in deathmatch.
   */
  numPoints: number;
}
