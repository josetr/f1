import {  Ergast } from "./models";
import useSWR from "swr";

export const apiUrl = "https://ergast.com/api/f1"

export async function fetcher(url: string) {
  const response = await fetch(`${apiUrl}/${url}`);
  const data = await response.json();
  return data as Ergast;
}

export function useFetch<T>(url: string, fn: (data: Ergast['MRData']) => T) {
  return useSWR(url, (...args) => fetcher(...args).then(result => fn(result.MRData)));
}

export function useFetchRaces(season?: string, race?: string) {
  return useFetch(`${season ?? "current"}${optional(race)}.json`, x => x.RaceTable);
}

export function useFetchSeasonRaceTable(season: string) {
  return useFetch(`${season}.json`, (x) => x.RaceTable);
}

export function useFetchSeasonTable() {
  return useFetch(`seasons.json?limit=1000`, x => x.SeasonTable);
}

export function useFetchSeasonDriverStandings(season?: string) {
  return useFetch(`${(season ?? "current")}/driverStandings.json`, x => x.StandingsTable);
}

export function useFetchDriverStandings(driverId: string) {
  return useFetch(`drivers/${driverId}/driverStandings.json`, x => x.StandingsTable);
}

export function useFetchConstructorStandings(constructor: string) {
  return useFetch(`constructors/${constructor}/constructorStandings.json?limit=999`, x => x.StandingsTable);
}

export function useFetchConstructorTable(constructor?: string) {
  return useFetch(`current/constructors${optional(constructor)}.json`, x => x.ConstructorTable);
}

export function useFetchCircuitTable(circuit?: string) {
  return useFetch(`current/circuits${optional(circuit)}.json`, x => x.CircuitTable);
}

export function useFetchDriver(driver: string) {
  return useFetch(`drivers/${driver}.json`, x => x.DriverTable);
}

export function useFetchQualifying(driver: string) {
  return useFetch(`drivers/${driver}/qualifying.json`,x => x.RaceTable);
}

export function useFetchRaceInfo(season?: string, race?: string) {
  return useFetch(`${season ?? "current"}/${race ?? "last"}.json`,x => x.RaceTable);
}

export function useFetchRaceResults(season?: string, race?: string) {
  return useFetch(`${season ?? "current"}/${race ?? "last"}/results.json`, x => x.RaceTable);
}

export function useFetchConstructorLeader() {
  return useFetch(`current/last/constructorStandings.json?limit=1`, x => x.StandingsTable.StandingsLists[0]?.ConstructorStandings[0]?.Constructor);
}

export function useFetchDriverLeader() {
  return useFetch(`current/last/driverStandings.json?limit=1`, x => x.StandingsTable.StandingsLists[0]?.DriverStandings[0]?.Driver);
}

export function useFetchLastPole() {
  return useFetch(`current/last/qualifying.json?limit=1`, x => x.RaceTable.Races[0]?.QualifyingResults[0]?.Driver);
}

export function useFetchLastWinner() {
  return useFetch(`current/last/results.json?limit=1`, x => x.RaceTable.Races[0]?.Results[0]?.Driver);
}

export function useFetchFastestLap() {
  return useFetch(`current/last/fastest/1/results.json?limit=1`, x => x.RaceTable.Races[0]?.Results[0]?.Driver);
}

function optional(part?: string) {
  return part ? "/" + part : '';
}
