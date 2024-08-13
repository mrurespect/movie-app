import React from 'react';

function About() {
    return (
        <section style={styles.container}>
            <div style={styles.content}>
                <h1 style={styles.heading}>About Noxe Movie Explorer</h1>
                <p style={styles.paragraph}>
                    Noxe Movie Explorer is a dynamic web application designed to provide users with a curated selection of trending movies, TV series, and information about popular people in the entertainment industry.
                    The app aims to offer an immersive experience for movie enthusiasts, allowing them to discover the latest and most popular content.
                </p>
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
    content: {
        textAlign: 'center',
        maxWidth: '800px',
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
    paragraph: {
        fontSize: '1.1rem',
        lineHeight: '1.6',
        color: '#555',
    },
};

export default About;
