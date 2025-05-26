
import React from "react";

export default function ScheduleCard({ title, time, doctor, icon }) {
  return (
    <div className="card border-0 mb-3 schedule-card" style={{ borderRadius: "1rem" }}>
      <div className="card-body p-3 d-flex align-items-center gap-3">
        {icon && (
          <span style={{ fontSize: "1.5rem" }} role="img" aria-label={title}>
            {icon}
          </span>
        )}
        <div>
          <h6 className="mb-1 fw-semibold">{title}</h6>
          <small className="d-block text-muted">{time}</small>
          {doctor && <small className="text-muted">{doctor}</small>}
        </div>
      </div>
    </div>
  );
}
