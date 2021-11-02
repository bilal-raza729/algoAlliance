
import Navigation from './navigation';
import Body from './body';
import Strength from './stength';
import Partner from './partner';
import News from './news';
import Subs from './subscribtion';
import Footer from './footer';
import '../App.css';

function Home(){
    return(
        <div className="App">
            <Navigation />
            <Body />
            <Strength />
            <Partner />
            <News />
            <Subs />
            <Footer />
        </div>
    )
}
export default Home;