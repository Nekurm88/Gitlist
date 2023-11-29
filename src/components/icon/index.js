import Heart from './heart'
import Branch from './branch'
import Location from './location'
import ArrowDown from './arrow-down'
import Book from './book'
import Cancel from './cancel'
import Check from './check'
import Github from './github'
import Home from './home'
import Link from './link'
import Search from './search'
import Star from './star'
import Twitter from './twitter'
import User from './user'

function Index( {name, ...props }) {
switch (name) {
    case 'heart': {
        return <Heart {...props} />
    }
    case 'branch': {
        return <Branch {...props} />
    }
    case 'location': {
        return <Location {...props} />
    }
    case 'arrow-down': {
        return <ArrowDown {...props} />
    }
    case 'book': {
        return <Book {...props} />
    }
    case 'cancel': {
        return <Cancel {...props} />
    }
    case 'check': {
        return <Check {...props} />
    }
    case 'github': {
        return <Github {...props} />
    }
    case 'home': {
        return <Home {...props} />
    }
    case 'link': {
        return <Link {...props} />
    }
    case 'search': {
        return <Search {...props} />
    }
    case 'star': {
        return <Star {...props} />
    }
    case 'twitter': {
        return <Twitter {...props} />
    }
    case 'user': {
        return <User {...props} />
    }
    

    default: {
        return null
    }
 }
}

Index.defaultProps = {
    size: 16,
    color: 'white'
}


export default Index
