import { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import Uploadform from './Upload';



const Profile = () =>{
    
    return (
        <div className="body-container">
                <div className="profile-main">
            <Uploadform />
        </div>
        </div>
           )


}

export default Profile;