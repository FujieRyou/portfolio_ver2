import ProfileTxt from "./profileTxt"
import MyPhoto from "./selfie"

const Profile = () =>{
    return(
        <div className="profileWrap">
            <h2>profile</h2>
            <div className="profileFlexWrap">
                <ProfileTxt />
                <MyPhoto />
            </div>
        </div>
    )
}

export default Profile