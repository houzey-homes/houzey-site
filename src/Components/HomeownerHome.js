import '../Styles/main.css';
import DecorationBrowsing from './DecorationBrowsing';

function HomeownerHome () {
    return (
        <main>
            <div className="HomeownerHomeContent">                          
                <button onClick={DecorationBrowsing}>Browse Decorations</button>
            </div>
        </main>
    );
}

export default HomeownerHome;