import React from 'react';
import './Menu.css';

const Menu = ({ data, league, setLeague }) => {

    return (
        <div className="menuContaier">
            <div className="menu">
                {
                    data.map(item => {
                        const [name, code, svgFlag] = item;
                        return (
                            <button key={name} onClick={(e) => setLeague(code)}>
                            {`${name.toUpperCase()} `}
                            <img src={svgFlag} alt={name} className='countriesFlags'/>
                            </button>
                        );
                    })

                }
            </div>
        </div>
    );
};

export default Menu;