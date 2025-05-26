
import React from "react";

export default function OrganCard({ name, level, date, icon }) {
  return (
    <div className="card border-0 shadow-sm mb-3" style={{ borderRadius: "1rem" }}>
      <div className="card-body p-3">
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h6 className="mb-0">{name}</h6>
            <small className="text-muted">Date: {date}</small>
          </div>
          <span style={{ fontSize: "1.5rem" }}>{icon}</span>
        </div>
        <div className="progress mt-3" style={{ height: 6 }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${level}%` }}
            aria-valuenow={level}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  );
}
