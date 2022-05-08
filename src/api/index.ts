import { CircuitTable, Constructor, ConstructorTable, Driver, DriverTable, Ergast, RaceTable, SeasonTable, StandingsTable } from "./models";

export const apiUrl = "https://ergast.com/api/f1"

export async function get(url: string) {
  const response = await fetch(`${apiUrl}/${url}`);
  const data = await response.json();
  return { data: data as Ergast };
}

export async function fetchRaces(season?: string, race?: string): Promise<RaceTable> {
  const response = await get(`${season ?? "current"}${optional(race)}.json`);
  return response.data.MRData.RaceTable;
}

export async function fetchSeasonRaceTable(season: string): Promise<RaceTable> {
  const response = await get(`${season}.json`);
  return response.data.MRData.RaceTable;
}

export async function fetchSeasonTable(): Promise<SeasonTable> {
  const response = await get(`seasons.json?limit=1000`);
  return response.data.MRData.SeasonTable;
}

export async function fetchSeasonDriverStandings(season?: string): Promise<StandingsTable> {
  const response = await get(`${(season ?? "current")}/driverStandings.json`);
  return response.data.MRData.StandingsTable;
}

export async function fetchDriverStandings(driverId: string): Promise<StandingsTable> {
  const response = await get(`drivers/${driverId}/driverStandings.json`);
  return response.data.MRData.StandingsTable;
}

export async function fetchConstructorStandings(constructor: string): Promise<StandingsTable> {
  const response = await get(`constructors/${constructor}/constructorStandings.json?limit=999`);
  return response.data.MRData.StandingsTable;
}

export async function fetchConstructorTable(constructor?: string): Promise<ConstructorTable> {
  const response = await get(`current/constructors${optional(constructor)}.json`);
  return response.data.MRData.ConstructorTable;
}

export async function fetchCircuitTable(circuit?: string): Promise<CircuitTable> {
  const response = await get(`current/circuits${optional(circuit)}.json`);
  return response.data.MRData.CircuitTable;
}

export async function fetchDriver(driver: string): Promise<DriverTable> {
  const response = await get(`drivers/${driver}.json`);
  return response.data.MRData.DriverTable;
}

export async function fetchQualifying(driver: string): Promise<RaceTable> {
  const response = await get(`drivers/${driver}/qualifying.json`);
  return response.data.MRData.RaceTable;
}

export async function fetchRaceInfo(season?: string, race?: string): Promise<RaceTable> {
  const response = await get(`${season ?? "current"}/${race ?? "last"}.json`);
  return response.data.MRData.RaceTable;
}

export async function fetchRaceResults(season?: string, race?: string): Promise<RaceTable> {
  const response = await get(`${season ?? "current"}/${race ?? "last"}/results.json`);
  return response.data.MRData.RaceTable;
}

export async function fetchConstructorLeader(): Promise<Constructor> {
  const response = await get(`current/last/constructorStandings.json?limit=1`);
  return response.data.MRData.StandingsTable.StandingsLists[0]?.ConstructorStandings[0]?.Constructor;
}

export async function fetchDriverLeader(): Promise<Driver> {
  const response = await get(`current/last/driverStandings.json?limit=1`)
  return response.data.MRData.StandingsTable.StandingsLists[0]?.DriverStandings[0]?.Driver;
}

export async function fetchLastPole(): Promise<Driver> {
  const response = await get(`current/last/qualifying.json?limit=1`)
  return response.data.MRData.RaceTable.Races[0]?.QualifyingResults[0]?.Driver;
}

export async function fetchLastWinner(): Promise<Driver> {
  const response = await get(`current/last/results.json?limit=1`)
  return response.data.MRData.RaceTable.Races[0]?.Results[0]?.Driver;
}

export async function fetchFastestLap(): Promise<Driver> {
  const response = await get(`current/last/fastest/1/results.json?limit=1`)
  return response.data.MRData.RaceTable.Races[0]?.Results[0]?.Driver;
}

function optional(part?: string) {
  return part ? "/" + part : '';
}
