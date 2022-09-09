import Link from 'next/link';
import List from 'components/List'
import { Season } from 'api/models'
import { useFetchSeasonTable } from 'api';
import FetchStatus from 'components/FetchStatus';

export default function Seasons() {
  const { data: seasonTable, mutate: loadSeasonTable } = useFetchSeasonTable();

  const renderer = (season: Season) => <p><Link href={`/seasons/${season.season}`}>{season.season}</Link></p>

  return <>
    <h1>Seasons</h1>
    {!seasonTable
      ? <FetchStatus data={seasonTable} name="seasons" retry={loadSeasonTable} page />
      : <List data={seasonTable.Seasons.sort((a, b) => b.season - a.season)} renderer={renderer} keyExtractor={season => season.season} />}
  </>
}
