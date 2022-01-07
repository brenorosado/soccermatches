import React from "react";
import "./Matches.css";

const Matches = ({ data, chosenMatchday, setChosenMatchday }) => {

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

                            if (matchday === chosenMatchday) {
                                return (
                                    <div className="match" key={id}>
                                        <div className="matchDate"><span>{`${status}: ${utcDate}`}</span></div>
                                        <div className="matchScore">
                                            <div className="team">
                                                <img src={`https://crests.football-data.org/${homeTeam.id}.svg`} alt={homeTeam.name} className="clubCrestScore" />
                                                <span>{`${homeTeam.name}`}</span>
                                            </div>
                                            <div className="scoreContainer">
                                                <span className="score">{`${fullTime.homeTeam !== null ? fullTime.homeTeam : ''} x ${fullTime.awayTeam !== null ? fullTime.awayTeam : ''}`}</span>
                                            </div>
                                            <div className="team">
                                                <img src={`https://crests.football-data.org/${awayTeam.id}.svg`} alt={awayTeam.name} className="clubCrestScore" />
                                                <span>{`${awayTeam.name}`}</span>
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