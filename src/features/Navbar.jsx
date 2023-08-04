import { Link } from 'react-router-dom';

function Navbar() {

    return (
      <div>
            <Link to='/findlove'><button>Find Love</button></Link>
            {/* <Link to='/about'><button>About</button></Link> */}
            {/* <Link to=''><button></button></Link> */}
      </div>
    )
}
export default Navbar