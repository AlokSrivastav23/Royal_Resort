import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h2>Royal Resort | Hotel Room Book</h2>
      <p>
        &copy; <span>{year}</span> RoyalResort.com - All Rights Copyright
        Reserved To{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href=""
        >
          Alok Srivastav
        </a>
      </p>
    </footer>
  );
}
