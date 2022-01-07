import React from "react";
import "./Matches.css";

const Matches = ({ data, chosenMatchday, setChosenMatchday }) => {

    const formatDate = (matchDateAndTime) => {
        const [date, matchTime] = matchDateAndTime.split("T");
        const matchDate = new Date(`${date} ${matchTime}`);
        const brazilianMatchDate = matchDate.toLocaleDateString('pt-BR');
        const brazilianMatchTimeWithSeconds = matchDate.toLocaleTimeString('pt-BR');
        const brazilianMatchTime = brazilianMatchTimeWithSeconds.substring(0, brazilianMatchTimeWithSeconds.length - 3);
    
        return `${brazilianMatchDate} - ${brazilianMatchTime}`;
    };

    return (
        <div className="matchesContent">
            <div className="matchdaySelector">
                <button className="matchdayButton" onClick={(e) => chosenMatchday <= 1 ? 1 : setChosenMatchday(chosenMatchday - 1)}>{"<"}</button>
                <span className="matchdayDisplay">{`${chosenMatchday}º MATCHDAY`}</span>
                <button className="matchdayButton" onClick={(e) => chosenMatchday >= (data[data.length -1].matchday) ? (data[data.length -1].matchday) : setChosenMatchday(chosenMatchday + 1)}>{">"}</button>
            </div>
            <div className="matches">
                {
                    data ? (
                        data.map(item => {
                            const { awayTeam, homeTeam, matchday, score, status, utcDate, id } = item;
                            const { fullTime } = score;
                            const homeTeamCrest = `https://crests.football-data.org/${homeTeam.id}.svg`;
                            const awayTeamCrest = `https://crests.football-data.org/${awayTeam.id}.svg`;

                            if (matchday === chosenMatchday) {
                                return (
                                    <div className="match" key={id}>
                                        <div className={`matchDate ${status}`}><span>{`${status}: ${formatDate(utcDate)}`}</span></div>
                                        <div className="matchScore">
                                            <div className="team">
                                                <img src={homeTeamCrest} alt={homeTeam.name} className="clubCrestScore" />
                                                <span>{homeTeam.name}</span>
                                            </div>
                                            <div className="scoreContainer">
                                                <span className="score">{`${fullTime.homeTeam !== null ? fullTime.homeTeam : ''} x ${fullTime.awayTeam !== null ? fullTime.awayTeam : ''}`}</span>
                                            </div>
                                            <div className="team">
                                                <img src={awayTeamCrest} alt={awayTeam.name} className="clubCrestScore" />
                                                <span>{awayTeam.name}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        })
                    ) : (
                        <h1>Loading</h1>
                    )
                }
            </div>
        </div>
    );
};

export default Matches;