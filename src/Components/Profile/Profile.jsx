import React, { useContext } from 'react';
import { AuthenContext } from '../../Context/AuthenContext';

function Profile() {
    const { userData } = useContext(AuthenContext);
    const { first_name, last_name, age, email } = userData || {};

    return (
        <section style={styles.container} >
            <div style={styles.profileCard}>
                <h1 style={styles.heading}>My Profile</h1>
                <p style={styles.info}><strong>Name:</strong> {first_name} {last_name}</p>
                <p style={styles.info}><strong>Age:</strong> {age}</p>
                <p style={styles.info}><strong>Email:</strong> {email}</p>
            </div>
        </section>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
        padding: '20px',
    },
    profileCard: {
        textAlign: 'center',
        minWidth: "400px",
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        padding: '40px',
    },
    heading: {
        fontSize: '2rem',
        marginBottom: '20px',
        color: '#333',
    },
    info: {
        fontSize: '1.2rem',
        lineHeight: '1.6',
        color: '#555',
        marginBottom: '10px',
    },
};

export default Profile;
