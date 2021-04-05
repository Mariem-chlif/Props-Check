
import PropTypes from "prop-types";
import "./profile.css";




const Profile = ({ fullName, bio, profession, handleName, children }) => {
    return (
        <div id="profiles">
            <div>{children}</div>
            <div>
                <h1>{fullName}</h1>
                <h2 style={{ color: "#211818" }}>{profession}</h2>
                <p style={{ color: "#5e5050" }}>
                    <b>{bio}</b>
                </p>
                <button   onClick={() => handleName(fullName)}>Click here</button>
            </div>
        </div>
    );
};

Profile.defaultProps = {
    fullName: " nameless profile",
    bio: "empty bio",
    profession: "unemployed",
    children: <img src="/profil.jpeg" alt="unkown-profile" />,
    handleName: () => alert("This is unkown profile"),
};
Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    children: PropTypes.element,
    handleName: PropTypes.func,
};

export default Profile;