import React, { useEffect, useState } from "react";
import { doGetRequest } from "helpers/ApiHelper";
import Standings from "components/standings";
import Matches from "components/matches";
import Menu from "components/menu";
import { LEAGUES } from "helpers/LeaguesHelper";
import Footer from "components/footer";

const Home = () => {
    const [standingsData, setStandingsData] = useState(null);
    const [matchesData, setMatchesData] = useState(null);
    const [league, setLeague] = useState('BL1');
    const [chosenMatchday, setChosenMatchday] = useState(1);

    useEffect(() => {
        setStandingsData(null);
        setMatchesData(null);

        const fetchStandingsData = async () => {
            const standingsResult = await doGetRequest(`http://api.football-data.org/v2/competitions/${league}/standings`)
                .then(({ standings }) => standings[0].table);
            
                setStandingsData(standingsResult);
        }
        
        const fetchMatchesData = async () => {
            const matchesResult = await doGetRequest(`http://api.football-data.org/v2/competitions/${league}/matches/`)
                .then(({ matches }) => matches);
            
                setChosenMatchday(matchesResult[0].season.currentMatchday);
                setMatchesData(matchesResult);
        }
        
        fetchStandingsData();
        fetchMatchesData();
    }, [league]);

    return (
        <>  
            <Menu data={LEAGUES} league={league} setLeague={setLeague} />
            <div className="home">
                <Standings data={standingsData} />
                <Matches data={matchesData} chosenMatchday={chosenMatchday} setChosenMatchday={setChosenMatchday} />
            </div>
            <Footer />
        </>
    );
};

export default Home;