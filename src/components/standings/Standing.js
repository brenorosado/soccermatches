import React from "react";

const Standings = ({ data }) => {

    return (
        <div className="standings">
            {
                data ? (
                    <table>
                        <thead>
                            <tr className="tableHead">
                                <td></td>
                                <td></td>
                                <td className="clubColumn">Club</td>
                                <td>MP</td>
                                <td>W</td>
                                <td>D</td>
                                <td>L</td>
                                <td>GF</td>
                                <td>GA</td>
                                <td>GD</td>
                                <td>Pts</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(item => {
                                    const { position, points, playedGames, won, lost, draw, goalsFor, goalsAgainst, goalDifference } = item;
                                    const { name, crestUrl } = item.team;
                                    return (
                                        <tr key={name} className="tableBody">
                                            <td>{position}</td>
                                            <td><img src={crestUrl} alt={name} className="clubCrest" /></td>
                                            <td className="clubColumn">{name}</td>
                                            <td>{playedGames}</td>
                                            <td>{won}</td>
                                            <td>{draw}</td>
                                            <td>{lost}</td>
                                            <td>{goalsFor}</td>
                                            <td>{goalsAgainst}</td>
                                            <td>{goalDifference}</td>
                                            <td>{points}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                ) : (
                    <h1>Loading</h1>
                )
            }
        </div>
    );
};

export default Standings;