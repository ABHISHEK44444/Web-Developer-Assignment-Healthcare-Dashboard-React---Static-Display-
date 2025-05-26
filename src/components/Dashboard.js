import React from "react";
import OrganCard from "./OrganCard";
import ScheduleCard from "./ScheduleCard";
import ActivityChart from "./ActivityChart";
import WeekCalendar from "./WeekCalendar";
import { organs, appointments, upcoming, activity } from "../mockData";
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function Dashboard() {
  return (
    <div className="container-fluid dashboard">
      {/* Top row: Dashboard heading (left) and This Week label (right) */}
     <div className="row align-items-center mb-4">
  {/* Left side: Dashboard heading */}
  <div className="col-md-3">
    <h4 className="fw-bold mb-0">Dashboard</h4>
  </div>

  {/* Right side: This Week text with muted dropdown arrow */}
  <div className="col-md-3 text-md-end">
    <span
      className="fw-light d-inline-flex align-items-center gap-1 text-muted"
      style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}
    >
      This Week <i className="bi bi-caret-down-fill"></i>
    </span>
  </div>



      </div>

      <div className="row g-4">
        {/* Left column */}
        <div className="col-lg-6">
          <div className="row g-3">
            {/* Hero image card */}
            <div className="col-12">
              <div
                className="card border-0 shadow-sm text-center py-5"
                style={{ borderRadius: "1rem" }}
              >
                <img
                  src="/anatomy.png"
                  alt="Human Anatomy"
                  className="img-fluid p-4"
                  style={{ maxHeight: 350, objectFit: "contain" }}
                />
              </div>
            </div>

            {/* Organ cards */}
            {organs.map((o) => (
              <div className="col-md-4" key={o.name}>
                <OrganCard {...o} />
              </div>
            ))}

            {/* Activity chart */}
            <div className="col-12">
              <ActivityChart data={activity} />
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="col-lg-6">
          <WeekCalendar />

          {appointments.map((a) => (
            <ScheduleCard key={a.title} {...a} />
          ))}

          <h6 className="fw-semibold mt-4 mb-3">The Upcoming Schedule</h6>
          {upcoming.map((u) => (
            <div key={u.day} className="mb-4">
              <small className="text-muted">On {u.day}</small>
              {u.items.map((item) => (
                <ScheduleCard
                  key={item.label}
                  title={item.label}
                  time={item.time}
                  icon={item.icon}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
