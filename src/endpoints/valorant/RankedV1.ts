const baseUrl = "/ranked/v1";

export const getLeaderBoardsByActIdEndpoint = (actId: string) => `${baseUrl}/leaderboards/by-act/${actId}`;
