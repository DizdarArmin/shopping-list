// No extra points give, but no extra points taken. Thats good!
import "../App.css";
import qrImage from "../assets/frame.png";

export default function QR({ toggler }) {
  return (
    <div onClick={toggler} className="custom-modal">
      <div className="modal-qr">
        <img src={qrImage}></img>
      </div>
    </div>
  );
}
