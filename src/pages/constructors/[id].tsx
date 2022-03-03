import { useState, useEffect } from 'react';
import Link from 'next/link';
import { LoadingEllipsis } from '../../components/Loading';
import { ConstructorTable, StandingsTable } from '../../models/Models'
import { fetchConstructorStandings, fetchConstructorTable } from '../../services/F1Service';
import { useRouter } from 'next/router';

function Constructors() {
  const [constructorTable, setConstructorTable] = useState<ConstructorTable | null>();
  const [constructorStanding, setConstructorStanding] = useState<StandingsTable | null>();
  const router = useRouter();
  const constructorId = router.query.id as string;

  useEffect(() => {
    if (!router.isReady)
      return;

    fetchConstructorTable(constructorId)
      .then(table => setConstructorTable(table))
      .catch(_ => setConstructorTable(null))

    fetchConstructorStandings(constructorId)
      .then(table => {
        table.StandingsLists.sort((a, b) => b.season - a.season)
        return setConstructorStanding(table);
      })
      .catch(_ => setConstructorStanding(null))
  }, [router.isReady, constructorId]);

  const constructor = constructorTable?.Constructors[0]

  return <>
    <div className="card">
      <div>
        {constructorTable === undefined && <LoadingEllipsis />}
        {constructorTable === null && "Error loading constructor."}
        {constructorTable && !constructor && "Constructor doesn't exist."}
        {constructor && <a href={constructor.url}>{constructor.name}</a>}
      </div>
      Nationality: {constructor?.nationality ?? "Unknown"}
    </div>
    <table>
      <thead>
        <tr><td>Season</td><td>Points</td><td>Wins</td></tr>
      </thead>
      <tbody>
        {constructorStanding === undefined &&
          <tr>
            <td colSpan={4}><LoadingEllipsis /></td>
          </tr>}
        {constructorStanding && constructorStanding.StandingsLists.length > 0 && constructorStanding.StandingsLists.map(standing =>
          <tr key={standing.season}>
            <td><Link href={`/seasons/${standing.season}`}>{standing.season}</Link></td>
            <td>{standing.ConstructorStandings[0].points}</td>
            <td>{standing.ConstructorStandings[0].wins}</td>
          </tr>)}
      </tbody>
    </table>
  </>
}

export default Constructors