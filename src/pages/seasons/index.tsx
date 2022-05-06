import { useState, useEffect } from 'react';
import Link from 'next/link';
import List from '../../components/List'
import { Loading } from '../../components/Loading';
import { SeasonTable, Season } from '../../models/Models'
import { fetchSeasonTable } from '../../services/F1Service';
import Card from '../../components/Card';

function Seasons() {
  const [seasonTable, setSeasonTable] = useState<SeasonTable | null>();

  useEffect(() => {
    fetchSeasonTable()
      .then(table => {
        table.Seasons.sort((a, b) => b.season - a.season)
        setSeasonTable(table);
      })
      .catch(_ => setSeasonTable(null))
  }, []);

  const renderer = (season: Season) => <p><Link href={`/seasons/${season.season}`}>{season.season}</Link></p>

  return <>
    <h1>Seasons</h1>
    {!seasonTable && <Card>
      {seasonTable === undefined && <Loading />}
      {seasonTable === null && "Error loading seasons."}
    </Card>}
    {seasonTable && <List data={seasonTable.Seasons} renderer={renderer} keyExtractor={season => season.season} />}
  </>
}

export default Seasons