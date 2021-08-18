import "../App.css";
import { useState } from "react";
import QR from "./QR";

// add space between imports
export default function Footer() {
  const [qr, setQr] = useState(false);
  return (
    <footer className="d-flex footer text-center justify-content-around">
      {qr && <QR toggler={() => setQr(!qr)} />}
      <div className="container row">
        <a
          className="col"
          target="_blank"
          href="https://www.linkedin.com/armindizdar"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin-in fa-2x"></i>
        </a>

        <button className="col qr-button btn-link" onClick={() => setQr(!qr)}>
          <i class="fas fa-qrcode fa-2x"></i>
        </button>
        <a
          className="col"
          target="_blank"
          href="https://github.com/DizdarArmin/shopping-list"
          rel="noreferrer"
        >
          <i className="fab fa-github fa-2x"></i>
        </a>
      </div>
    </footer>
  );
}
