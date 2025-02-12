import { useState, useEffect } from 'react';

export default function ApiWeather() {
    const [city, setCity] = useState('Barcelona');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [updateManually, setUpdateManually] = useState(false);

    const API_KEY = 'a4879237038bbbbb4ae33695d042109c';

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            .then((res) => res.json())
            .then((data) => {
                setLoading(true);
                setError(null);

                if (data.main) {
                    setWeatherData(data);

                } else {
                    setError('No se pudo obtener información del clima. Verifica el nombre de la ciudad.');
                    setWeatherData(null);
                }
                setLoading(false);
            });
    }, [updateManually]);

    const updateWeather = () => {
        setUpdateManually(!updateManually);
    }

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Estado del Clima</h1>

            <input
                type="text"
                value={city}
                onChange={handleCityChange}
                placeholder="Ingresa el nombre de la ciudad"
                style={{ padding: '10px', marginBottom: '20px', color: 'black' }}
            />
            <button onClick={() => updateWeather()} style={{ marginTop: '20px', padding: '10px', backgroundColor: 'grey' }}> Buscar</button>

            {error && <div style={{ color: 'red' }}>{error}</div>}

            {loading
                ? (<p style={{ color: 'yellow' }}>Cargando...</p>)
                : (weatherData && (
                    <div>
                        <h2>{weatherData.name}</h2>
                        <p>Temperatura: {weatherData.main.temp}°C</p>
                        <p>Humedad: {weatherData.main.humidity}%</p>
                        <p>Condición: {weatherData.weather[0].description}</p>
                    </div>
                ))}
            <br></br>
            <hr></hr>
            {/* <button onClick={() => updateWeather()} style={{ marginTop: '20px', padding: '10px', backgroundColor: 'grey' }}>
                Actualizar
            </button> */}
        </div >
    );
}
