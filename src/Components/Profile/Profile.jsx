import React, { useContext } from 'react';
import { AuthenContext } from "../../Context/AuthenContext";

function Profile() {
    let { userData } = useContext(AuthenContext);
    let { first_name, last_name, age, email } = userData || {};

    const profileStyle = {
        backgroundColor: '#f4f4f4',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        margin: '20px',
    };

    const headingStyle = {
        color: 'black',
        marginBottom: '10px',
    };

    const textStyle = {
        lineHeight: '1.5',
        marginBottom: '8px',
    };

    return (
        <div style={profileStyle} className="text-dark">
            <h2 style={headingStyle}>User Profile</h2>
            <p style={textStyle}>
                <strong>Name:</strong> {first_name} {last_name}
            </p>
            <p style={textStyle} >
                <strong>Age:</strong> {age}
            </p>
            <p style={textStyle}>
                <strong>Email:</strong> {email}
            </p>
        </div>
    );
}

export default Profile;

