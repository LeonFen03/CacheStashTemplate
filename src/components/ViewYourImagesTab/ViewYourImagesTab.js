import SearchBarAndFilter from "../SearchBarAndFilters/SearchBarAndFilters";
import { useEffect, useState } from "react";
import { CurrentUser } from "../User/CurrentUser";
import { useContext } from "react";
function ViewYourImagesTab() {
    const [userPhotos,setUserPhotos] = useState([]);
    const {currentUser} = useContext(CurrentUser);
    const grabUserPhotos = async () => {
        const response = await fetch(`http://localhost:4000/images`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id:currentUser._id
            })
        })
        setUserPhotos(await response.json());
    }
    useEffect(() => {
        grabUserPhotos();
    },[]);
    useEffect(() => {
        console.log(userPhotos)
    },[userPhotos])
    return <div>
        <SearchBarAndFilter photos={userPhotos} />
    </div>
}
export default ViewYourImagesTab;