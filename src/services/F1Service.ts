import axios from "axios";
import { CircuitTable, ConstructorTable, DriverTable, Ergast, RaceTable, SeasonTable, StandingsTable } from "../models/Models";

export const apiUrl = "https://ergast.com/api/f1"

export function get(url: string) {
  return axios.request<Ergast>({ url: `${apiUrl}/${url}` })
}

export async function fetchRaces(): Promise<RaceTable> {
  const response = await get(`current.json`);
  return response.data.MRData.RaceTable;
}

export async function fetchSeasonRaceTable(seasonId: string): Promise<RaceTable> {
  const response = await get(`${seasonId}.json`);
  return response.data.MRData.RaceTable;
}

export async function fetchSeasonTable(): Promise<SeasonTable> {
  const response = await get(`seasons.json?limit=1000`);
  return response.data.MRData.SeasonTable;
}

export async function fetchDriverStandings(config?: { season: string }): Promise<StandingsTable> {
  const response = await get(`${(config && config.season ? config.season : "current")}/driverStandings.json`);
  return response.data.MRData.StandingsTable;
}

export async function fetchConstructorStandings(constructorId: string): Promise<StandingsTable> {
  const response = await get(`constructors/${constructorId}/constructorStandings.json?limit=999`);
  return response.data.MRData.StandingsTable;
}

export async function fetchConstructorTable(constructorId?: string): Promise<ConstructorTable> {
  if (constructorId) {
    const response = await get(`constructors/${constructorId}.json`);
    return response.data.MRData.ConstructorTable;
  }
  const response = await get(`current/constructors.json`);
  return response.data.MRData.ConstructorTable;
}

export async function fetchCircuitTable(circuitId?: string): Promise<CircuitTable> {
  if (circuitId) {
    const response = await get(`current/circuits/${circuitId}.json`);
    return response.data.MRData.CircuitTable;
  }
  const response = await get(`current/circuits.json`);
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

export async function fetchRaceResults(season: string, race: string): Promise<RaceTable> {
  if (!season)
    season = "current"
  const response = await get(`${season}/${race}/results.json`);
  return response.data.MRData.RaceTable;
}