
import { Link } from 'react-router-dom'


export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" style={{color: "red"}} href="/">NetFlix</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                {/* <Link class="nav-link" to="/">NetfflixHome <span class="sr-only"></span></Link>
                <Link class="nav-link" to="/netflixmovies">NetflixMovies📽️ <span class="sr-only"></span></Link>
                <Link class="nav-link" to="/netflixshows">NetflixShows <span class="sr-only"></span></Link>
                <Link class="nav-link" to="/webseries">Webseries <span class="sr-only"></span></Link>
                <Link class="nav-link" to="/languages">Languages <span class="sr-only"></span></Link>
                <Link class="nav-link" to="/about">About<span class="sr-only"></span></Link>
                <Link class="nav-link" to="/IplTeams">IPL Teams👊<span class="sr-only"></span></Link>
                <Link class="nav-link" to="/functionDemo1">FunctionDemo1<span class="sr-only"></span></Link> */}
                 <Link class="nav-link" to="/useStateDemo1">Use State demo1<span class="sr-only"></span></Link>
                <Link class="nav-link" to="/employees">Employees<span class="sr-only"></span></Link>
                <Link class="nav-link" to="/employees3">Employees3<span class="sr-only"></span></Link>
                <Link class="nav-link" to="/inputDemo2">Input Demo2<span class="sr-only"></span></Link>
                <Link class="nav-link" to="/formDemo1">Form Submit<span class="sr-only"></span></Link>
                <Link class="nav-link" to="/inputDropDown">Drop Down<span class="sr-only"></span></Link>


            </ul>
        </div>
    </nav>
  )
}
