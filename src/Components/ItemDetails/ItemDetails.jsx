import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';

function ItemDetails() {
    const { id, media_type } = useParams();
    const [item, setItemData] = useState(null);

    const url = `https://api.themoviedb.org/3/${media_type}/${id}?api_key=ec42fc0dbd23576b091c75c5dc1c94b4`;

    async function getItemsData() {
        const { data } = await axios.get(url);
        setItemData(data);
    }

    useEffect(() => {
        getItemsData();
    }, [url]);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{item && (item.title || item.name)}</title>
                <meta name="description" content={item && (item.overview || item.biography)} />
            </Helmet>
            {item ? (
                <div style={styles.container}>
                    <div style={styles.imageContainer}>
                        <img
                            src={
                                item.poster_path
                                    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                                    : `https://image.tmdb.org/t/p/w500${item.profile_path}`
                            }
                            alt={item.title || item.name}
                            style={styles.image}
                        />
                    </div>
                    <div style={styles.details}>
                        <h1 style={styles.title}>{item.title || item.name}</h1>
                        <h2 style={styles.tagline}>{item.tagline}</h2>
                        <p style={styles.overview}>{item.overview || item.biography}</p>
                        {item.homepage && (
                            <p style={styles.homepage}>
                                <strong>Homepage:</strong>{' '}
                                <a href={item.homepage} target="_blank" rel="noopener noreferrer" style={styles.link}>
                                    {item.homepage}
                                </a>
                            </p>
                        )}
                        {(item.release_date || item.first_air_date) && (
                            <p style={styles.date}>
                                <strong>Release Date:</strong> {item.release_date || item.first_air_date}
                            </p>
                        )}
                        {item.birthday && (
                            <p style={styles.date}>
                                <strong>Birthday:</strong> {item.birthday}
                            </p>
                        )}
                        <p style={styles.popularity}>
                            <strong>Popularity:</strong> {item.popularity}
                        </p>
                        {item.vote_average && (
                            <p style={styles.vote}>
                                <strong>Vote Average:</strong> {item.vote_average?.toFixed(1)}
                            </p>
                        )}
                        {item.vote_count && (
                            <p style={styles.vote}>
                                <strong>Vote Count:</strong> {item.vote_count}
                            </p>
                        )}
                    </div>
                </div>
            ) : (
                <div style={styles.loading}>
                    <i className="fas fa-spinner fa-spin fa-3x"></i>
                </div>
            )}
        </>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        margin: '20px auto',
        maxWidth: '1200px',
    },
    imageContainer: {
        flex: '1',
        maxWidth: '300px',
        marginRight: '20px',
    },
    image: {
        width: '100%',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    details: {
        flex: '2',
    },
    title: {
        fontSize: '2.5rem',
        margin: '0',
        color: '#333',
    },
    tagline: {
        fontSize: '1.2rem',
        fontStyle: 'italic',
        color: '#666',
        margin: '10px 0',
    },
    overview: {
        fontSize: '1rem',
        color: '#555',
        lineHeight: '1.6',
        marginBottom: '20px',
    },
    homepage: {
        fontSize: '1rem',
        color: '#007bff',
    },
    link: {
        color: '#007bff',
        textDecoration: 'none',
    },
    date: {
        fontSize: '1rem',
        color: '#555',
    },
    popularity: {
        fontSize: '1rem',
        color: '#555',
    },
    vote: {
        fontSize: '1rem',
        color: '#555',
    },
    loading: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f8f9fa',
    },
};

export default ItemDetails;
