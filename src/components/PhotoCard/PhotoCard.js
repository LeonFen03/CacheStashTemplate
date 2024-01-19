import React from 'react';
import './PhotoCard.css';
import { Avatar } from '@mui/material';
import MaterialUIChip from '../Utility-Functions/MaterialUIChipComponent';
function PhotoCard ({ photo_url, name, avatar_url, description, category }) {
    return (<div className="image-container">
        <img src={photo_url}/>
        <div className="overlay">
            <div className="user-header">
            <div className="user-info-header">
            <Avatar style={{width:'60px',height:'60px'}}  src={avatar_url}/>
            <p > {name} </p>
            </div>
            <MaterialUIChip name={category[0]} color={category[1]}  />
            </div>
            <p> {description}  </p>
            <p><u>Click to view full image</u></p>
        </div>
    </div>)
}

export default PhotoCard;