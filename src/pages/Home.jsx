import React, { useEffect, useState } from 'react'

export default function Home() {

    const [imgHome, setImgHome] = useState([]);

    const obtieneDatos = async () => {
        try {
            const peticion = await fetch("https://pokeapi.co/api/v2/pokemon/Horsea");
            const data = await peticion.json();
            console.log(data);
            setImgHome(imgHome)
        } catch (error) {
        }
    }

    useEffect(() => {
        obtieneDatos();
    }, []);

    return (
        <>
            <div className="home-container">
                <h1>¡Bienvenido </h1>
                <h1>Nuevo Maestro Pokemón!</h1>
                <p className="parrafo-home">En "Pokemones" puedes seleccionar y saber un poco más acerca de sus estadísticas para ser utilizados en batalla</p>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png" alt="" />
            </div>
        </>
    )
}