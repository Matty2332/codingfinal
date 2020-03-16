
import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'
// use @giphy/js-fetch-api to fetch gifs, instantiate with your api key
const gf = new GiphyFetch('B0zcXPfg1JWI5ojI80G1P4tzBmOl2nX2')
// configure your fetch: fetch 10 gifs at a time as the user scrolls (offset is handled by the grid)
const fetchGifs = (offset: number) => gf.trending({ offset, limit: 10 })
// Render the React Component and pass it your fetchGifs as a prop
ReactDOM.render(<Grid width={800} columns={3} fetchGifs={fetchGifs} />, target)