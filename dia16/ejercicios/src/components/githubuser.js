import React, { useState } from 'react';

const GitHubUser = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUserData = async () => {
        if (!username) return;

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            if (!response.ok) {
                throw new Error('Usuario no encontrado');
            }
            const data = await response.json();
            setUserData(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Nombre de usuario de GitHub"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ color: 'black' }}
            />
            <button onClick={fetchUserData}>Buscar</button>

            {loading
                ? <p>Cargando...</p>
                : userData && (
                    <div>
                        <img src={userData.avatar_url} alt={userData.login} width="100" />
                        <h2>{userData.name || userData.login}</h2>
                        <p>Repositorios públicos: {userData.public_repos}</p>
                    </div>
                )}
            {error && <p>Error: {error}</p>}


        </div>
    );
};

export default GitHubUser;
