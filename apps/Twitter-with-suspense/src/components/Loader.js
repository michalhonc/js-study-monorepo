import React from 'react';
import './Loader.css';

export const Loader = ({ className }) => (
    <div className={`Loader ${className}`}>
        <svg height='100%' viewBox='0 0 32 32' width='100%' 
            xmlns='http://www.w3.org/2000/svg'>
            <g>
                <circle cx='16' cy='16' fill='none' r='14' strokeWidth='4' style={{stroke: 'rgb(29, 161, 242)', opacity: '0.2'}}></circle>
            </g>
            <g className='Loader-circle'>
                <circle cx='16' cy='16' fill='none' r='14' strokeWidth='4' style={{stroke: 'rgb(29, 161, 242)', strokeDasharray: '80px', strokeDashoffset: '60px'}}></circle>
            </g>
        </svg>
    </div>
);
