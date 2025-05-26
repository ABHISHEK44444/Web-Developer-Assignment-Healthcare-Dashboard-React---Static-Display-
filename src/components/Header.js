
import React from "react";
import { FaBell } from "react-icons/fa";
import "./Header.css";

export default function Header() {
  return (
    <header className="d-flex align-items-center justify-content-between mb-4">
      {/* search with bell inside */}
      <div className="position-relative" style={{ width: "100%", maxWidth: "500px" ,  border: "1px solid #ccc", borderRadius: "4px"}}>
        <input
          type="text"
          className="form-control search-input ps-4"
          placeholder="Search"
        />
        <FaBell className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted" />
      </div>

      <div className="d-flex align-items-center gap-3">
       <span style={{ fontSize: "1.5rem" }} role="img" aria-label="hero">
  🧑‍💼
</span>
        <button className="btn btn-primary btn-sm rounded-circle fw-bold">+</button>
      </div>
    </header>
  );
}
