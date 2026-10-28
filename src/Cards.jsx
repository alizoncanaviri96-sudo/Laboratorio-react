
import { useState } from "react";

const Cards = ({ nombre, imagen, onLike }) => {
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
    onLike();
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        margin: "10px",
        borderRadius: "10px",
        textAlign: "center",
        width: "180px",
      }}
    >
      <img
        alt={nombre}
        src={`/${imagen}`}
        width="150px"
        height="150px"
        style={{ objectFit: "contain" }}
      />

      <h3>{nombre}</h3>

      <button
        style={{
          width: "100px",
          padding: "6px",
          margin: "10px",
          backgroundColor: "rgb(87, 222, 116)",
          border: "none",
          borderRadius: "5px",
          color: "white",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        Like {likes}
      </button>
    </div>
  );
};

export default Cards;












