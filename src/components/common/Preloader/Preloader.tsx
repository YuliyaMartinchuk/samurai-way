import React from 'react';
import preloader from "../../../assets/images/loading2.png";
import s from './Preloader.module.css'


export const Preloader = () => {
    return (
        <div className = {s.root}>
            <img src={preloader}/>
        </div>
    );
};

