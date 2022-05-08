import Link from 'next/link';
import List from 'components/List'
import { SeasonTable, Season } from 'api/models'
import { fetchSeasonTable } from 'api';
import FetchStatus from 'components/FetchStatus';
import useFetch from 'hooks/useFetch';

export default function Seasons() {
  const [seasonTable, loadSeasonTable] = useFetch<SeasonTable>(fetchSeasonTable);

  const renderer = (season: Season) => <p><Link href={`/seasons/${season.season}`}>{season.season}</Link></p>

  return <>
    <h1>Seasons</h1>
    {!seasonTable
      ? <FetchStatus data={seasonTable} name="seasons" retry={loadSeasonTable} card={true} />
      : <List data={seasonTable.Seasons.sort((a, b) => b.season - a.season)} renderer={renderer} keyExtractor={season => season.season} />}
  </>
}
