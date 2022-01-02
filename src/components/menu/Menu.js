import React from "react";

const Menu = ({ data, league, setLeague }) => {

    return (
        <div className="menuContaier">
            <div className="menu">
                {
                    data.map(item => {
                        const [name, code] = item;
                        return (
                            <button key={name} onClick={(e) => {
                                setLeague(code);
                                // e.target.classList.add('selected');
                            }
                            }>{name.toUpperCase()}</button>
                        );
                    })

                }
            </div>
            <div className="selectedLeague">
                <span>
                    {
                        data.map(item => {
                            const [name, code] = item;
                            if (league === code) return name.toUpperCase();
                        })
                    }
                </span>
            </div>
        </div>
    );
};

export default Menu;