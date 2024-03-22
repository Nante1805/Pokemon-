import React from 'react';

function index() {
    return (
        <div>
            <div
                
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                  padding: "1rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "1.2rem",
                    fontFamily: "cursive",
                    color: "#333",
                  }}
                >
                  {pokemon.name}
                </span>
                <a href={`/pokemon/${pokemon.name}`}>
                  {" "}
                  {/* Link to specific pokemon route */}
                  <button
                    style={{
                      backgroundColor: "#f7813e",
                      color: "#fff",
                      padding: "0.5rem 1rem",
                      borderRadius: "5px",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "0.8rem",
                      fontFamily: "cursive",
                    }}
                  >
                    Voir Plus
                  </button>
                </a>
              </div>
        </div>
    );
}

export default index;