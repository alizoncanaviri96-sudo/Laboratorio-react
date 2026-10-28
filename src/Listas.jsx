
import { useState } from "react";
import Cards from "./Cards.jsx";

const Listas = () => {
  const canciones = [
    { id: 1, nombre: "Dynamite", imagen: "Dynamite.png" },
    { id: 2, nombre: "Hooligan", imagen: "Hooligan.png" },
    { id: 3, nombre: "Fake-Love", imagen: "Fake-Love.jpg" },
  ];

  const [total, setTotal] = useState(0);
  const [busqueda, setBusqueda] = useState("");

  const cancionesFiltradas = canciones.filter((cancion) =>
    cancion.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Total de likes de canciones: {total}</h1>

      <input
        style={{
          padding: "10px",
          marginBottom: "20px",
          width: "300px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
        type="text"
        placeholder="Ingrese el nombre de una canción"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {cancionesFiltradas.length === 0 && (
          <p style={{ color: "#888", fontSize: "20px" }}>
            No se encontraron canciones que coincidan con el nombre {busqueda}
          </p>
        )}

        {cancionesFiltradas.map((cancion) => (
          <Cards
            key={cancion.id}
            nombre={cancion.nombre}
            imagen={cancion.imagen}
            onLike={() => setTotal(total + 1)}   
          />
        ))}
      </div>
    </div>
  );
};

export default Listas;








   








 














