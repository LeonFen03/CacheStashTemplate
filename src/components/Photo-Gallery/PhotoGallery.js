import React from 'react';
import PhotoContainer from '../PhotoContainer/PhotoContainer';
import './PhotoGallery.css'
import { useState } from 'react';

import SearchBarAndFilter from '../SearchBarAndFilters/SearchBarAndFilters';
import { useEffect } from 'react';
function PhotoGallery () {
    const categoriesWithColorTypes = [
        ["Adventure", "error"],
        ["Nature", "info"],
        ["Urban", "warning"],
        ["Portraits", "success"],
        ["Travel", "primary"],
        ["Stuff", "secondary"],
        ["Events", "primary"]
    ];

    
    const [photos,setPhotos] = useState([]);
    useEffect(() => {
        fetch('https:/api.unsplash.com/photos/?client_id=pJqzF8NAu8Yda5WIXH3cnDcLthV_cG7vCGfd3XHMaJo&per_page=60').then( async (photos) => {
            setPhotos((await photos.json()).map((object) => {

                return {
                    ...object,
                    image_url:object.urls.regular,
                    user_name:object.user.username,
                    avatar_url:object.user.profile_image.medium,
                    description:object.description,
                    "category": categoriesWithColorTypes[Math.floor(Math.random()*categoriesWithColorTypes.length)]
                };
            }));
        })
    },[])

    return (<SearchBarAndFilter photos={photos}   />)
}
export default PhotoGallery;