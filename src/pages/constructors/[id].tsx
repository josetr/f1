import { useCallback } from 'react';
import Link from 'next/link';
import { ConstructorTable, StandingsTable } from 'api/models'
import { fetchConstructorStandings, fetchConstructorTable } from 'api';
import { useRouter } from 'next/router';
import Card from 'components/Card';
import useFetch from 'hooks/useFetch';
import FetchStatus from 'components/FetchStatus';

export default function Constructors() {
  const router = useRouter();
  const constructorId = router.query.id as string;
  const fetchConstructorTableById = useCallback(() => fetchConstructorTable(constructorId), [constructorId]);
  const fetchStandingsTableById = useCallback(() => fetchConstructorStandings(constructorId), [constructorId]);
  const [constructorTable, loadConstructorTable] = useFetch<ConstructorTable>(fetchConstructorTableById);
  const [constructorStanding, loadConstructorStanding] = useFetch<StandingsTable>(fetchStandingsTableById);
  const constructor = constructorTable?.Constructors[0]
  return <>
    <Card>
      <FetchStatus name="constructor" data={constructorTable} retry={loadConstructorTable} />
      {constructorTable && (
        !constructor
          ? "Constructor doesn't exist."
          : <a href={constructor.url}>{constructor.name}</a>
      )}
      <p>Nationality: {constructor?.nationality ?? "Unknown"}</p>
    </Card>
    <div className='table-container'>
      <table>
        <thead>
          <tr><th>Season</th><th>Points</th><th>Wins</th></tr>
        </thead>
        <tbody>
          {!constructorStanding &&
            <tr>
              <td colSpan={4}>
                <FetchStatus name="table" data={constructorStanding} retry={loadConstructorStanding} />
              </td>
            </tr>
          }
          {constructorStanding && constructorStanding.StandingsLists.length > 0 && constructorStanding.StandingsLists.sort((a, b) => b.season - a.season).map(standing =>
            <tr key={standing.season}>
              <td><Link href={`/seasons/${standing.season}`}>{standing.season}</Link></td>
              <td>{standing.ConstructorStandings[0].points}</td>
              <td>{standing.ConstructorStandings[0].wins}</td>
            </tr>)}
        </tbody>
      </table>
    </div>
  </>
}
