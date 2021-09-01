import axios from 'axios';

export interface Location {
	locality: string,
	country: string
}

export interface Driver {
	driverId: string
	url: string
	givenName: string
	familyName: string
	dateOfBirth: string
	nationality: string
}

export interface Circuit {
	circuitId: string
	circuitName: string
	url: string
	Location: Location
}

export interface Season {
	season: number
	url: string
}

export interface Constructor {
	constructorId: string
	url: string
	name: string
	nationality: string
}

export interface RaceTable {
	season: string
	Races: Race[]
}

export interface Time {
	millis: number
	time: string
}

export interface Ergast {
	MRData: {
		StandingsTable: StandingsTable
		RaceTable: RaceTable
		SeasonTable: SeasonTable
		DriverTable: DriverTable
		ConstructorTable: ConstructorTable
		CircuitTable: CircuitTable
	}
}

export interface RaceResult {
	number: number
	position: number
	positionText: string
	points: number
	grid: number
	laps: number
	status: string
	Time: Time
	FastestLap: { rank: number, lap: number, Time: { time: string }, AverageSpeed: { units: "kph", speed: number } }
	Driver: Driver
}

export interface Race {
	season: number
	round: number
	url: string
	Circuit: Circuit
	raceName: string
	date: string
	time: string
	Results: RaceResult[]
	QualifyingResults: any[]
}

export interface DriverStanding {
	position: number
	positionText: number
	points: number
	wins: number
	Driver: Driver
	Constructors: Constructor[]
}

export interface ConstructorStanding {
	position: number
	positionText: number
	points: number
	wins: number
	Constructor: Constructor
}

export interface DriverTable {
	driverId: string
	Drivers: Driver[]
}

export interface ConstructorTable {
	season: number
	Constructors: Constructor[]
}

export interface StandingsTable {
	driverId: string
	StandingsLists: StandingsEntry[]
}

export interface StandingsEntry {
	season: number
	round: number
	DriverStandings: DriverStanding[]
	ConstructorStandings: ConstructorStanding[]
}

export interface SeasonTable {
	Seasons: Season[]
}

export interface CircuitTable {
	season: number
	Circuits: Circuit[]
}
