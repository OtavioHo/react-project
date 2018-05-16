import React from 'react';
import ReactDOM from 'react-dom';

import './Menu.css'



export default function({ onPageSelect }) {
    return(
        <div className="menu">
            <div className="option" onClick={() => onPageSelect('Page 1')}> <h2>page 1</h2> </div>
            <div className="option" onClick={() => onPageSelect('Page 2')}> <h2>page 2</h2> </div>
            <div className="option" onClick={() => onPageSelect('Page 3')}> <h2>page 3</h2> </div>
            <div className="option" onClick={() => onPageSelect('Page 4')}> <h2>page 4</h2> </div>
            <div className="option" onClick={() => onPageSelect('Page 5')}> <h2>page 5</h2> </div>
            <div className="option" onClick={() => onPageSelect('Page 6')}> <h2>page 6</h2> </div>
            <div className="option" onClick={() => onPageSelect('Page 7')}> <h2>page 7</h2> </div>
            <div className="option" onClick={() => onPageSelect('Page 8')}> <h2>page 8</h2> </div>
            <div className="option" onClick={() => onPageSelect('Page 9')}> <h2>page 9</h2> </div>
            <div className="option" onClick={() => onPageSelect('Page 10')}> <h2>page 10</h2> </div>
        </div>
    );
}
