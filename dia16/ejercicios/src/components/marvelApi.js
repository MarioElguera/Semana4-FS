// src/components/Search.js
import React, { useState } from 'react';
import md5 from 'crypto-js/md5';

const SearchMarvel = () => {
    const [characterName, setCharacterName] = useState('');
    const [characterData, setCharacterData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        if (!characterName) return;

        setLoading(true);
        setError(null);

        const ts = new Date().getTime();
        const publicKey = '0cee1d4f4a55994f25d53944db4b96bf';
        const privateKey = '3286040d31179d944b1c7b5d0435c5db53ebb382';
        const hash = md5(`${ts}${privateKey}${publicKey}`).toString();

        console.log("hash => ", hash);
        console.log("publicKey", publicKey);

        try {
            const url = new URL('https://gateway.marvel.com/v1/public/characters');
            const params = {
                name: characterName,
                apikey: publicKey,
                ts,
                hash,
            };

            Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();
            if (data.data.results.length > 0) {
                setCharacterData(data.data.results[0]);

            } else {
                setCharacterData(null);
                setError(`No se encontraron resultados para "${characterName}". Verifica el nombre del personaje.`);
            }
        } catch (err) {
            setCharacterData(null);
            setError('Error al obtener los datos del personaje.');

        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={characterName}
                onChange={(e) => setCharacterName(e.target.value)}
                placeholder="Personaje de Marvel"
                style={{ color: 'black' }}
            />
            <button onClick={handleSearch}>Buscar</button>

            {loading
                ? <p>Cargando...</p>
                : characterData && (
                    <div>
                        <h2>{characterData.name}</h2>
                        <img
                            src={`${characterData.thumbnail.path}.${characterData.thumbnail.extension}`}
                            alt={characterData.name}
                        />
                        <p style={{ width: '50vw' }}>Descripción: {characterData.description || 'No hay descripción disponible.'}</p>
                    </div>
                )}
            {error && <p>{error}</p>}
        </div>
    );
};

export default SearchMarvel;
