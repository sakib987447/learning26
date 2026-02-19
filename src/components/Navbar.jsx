import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        {/* <a className="navbar-brand" style={{color: "red"}} href="/">NetFlix</a> */}
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">

                 {/* <Link className="nav-link" to="/">NetfflixHome <span className="sr-only"></span></Link>
                <Link className="nav-link" to="/netflixmovies">NetflixMovies📽️ <span className="sr-only"></span></Link>
                <Link className="nav-link" to="/netflixshows">NetflixShows <span className="sr-only"></span></Link>
                <Link className="nav-link" to="/webseries">Webseries <span className="sr-only"></span></Link>
                <Link className="nav-link" to="/languages">Languages <span className="sr-only"></span></Link>
                <Link className="nav-link" to="/about">About<span className="sr-only"></span></Link>
                <Link className="nav-link" to="/IplTeams">IPL Teams<span className="sr-only"></span></Link>
                <Link className="nav-link" to="/functionDemo1">FunctionDemo1<span className="sr-only"></span></Link>
                <Link className="nav-link" to="/useStateDemo1">Use State demo1<span className="sr-only"></span></Link>
                <Link className="nav-link" to="/employees">Employees<span className="sr-only"></span></Link>
                <Link className="nav-link" to="/employees3">Employees3<span className="sr-only"></span></Link>
                <Link className="nav-link" to="/inputDemo2">Input Demo2<span className="sr-only"></span></Link> */}
                {/*<Link className="nav-link" to="/formDemo1">Form Submit<span className="sr-only"></span></Link>
                <Link className="nav-link" to="/inputDropDown">Drop Down<span className="sr-only"></span></Link> 
                <Link className="nav-link" to="/formDemo2">Form Demo 2<span className="sr-only"></span></Link>
                <Link className="nav-link" to="/formDemo3">Form Demo 3<span className="sr-only"></span></Link>  */}  
                <Link className="nav-link" to="/formDemo4">Form Demo 4<span className="sr-only"></span></Link>
                <Link className="nav-link" to="/apiDemo1">Api Demo 1<span className="sr-only"></span></Link>
                 <Link className="nav-link" to="/apiDemo2">Api Demo 2<span className="sr-only"></span></Link> 
                   <Link className="nav-link" to="/apiDemo3">Api Demo 3<span className="sr-only"></span></Link>
                      <Link className="nav-link" to="/apiDemo4">Api Demo 4<span className="sr-only"></span></Link>
                      <Link className="nav-link" to="/apiDemo5">Api Demo 5<span className="sr-only"></span></Link>
                       <Link className="nav-link" to="/apiDemo6">Api Demo 6<span className="sr-only"></span></Link> 
                        <Link className="nav-link" to="/apiDemo7">Api Demo 7<span className="sr-only"></span></Link>     
            </ul>
        </div>
    </nav>
  )
}
