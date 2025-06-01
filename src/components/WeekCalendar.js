import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const dates = [25, 26, 27, 28, 29, 30, 31];

export default function WeekCalendar() {
  return (
    <>
      {/* Inline styles for hover effect */}
      <style>{`
        .date-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          transition: background-color 0.2s, color 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          cursor: pointer;
        }
        .date-circle:hover {
          background-color: #0d6efd; /* Bootstrap primary */
          color: white;
        }
      `}</style>

      <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: "1rem" }}>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h6 className="mb-0">October 2025</h6>
            <div className="d-flex gap-2">
              <button className="btn btn-sm btn-light rounded-circle p-1">
                <FaChevronLeft size={12} />
              </button>
              <button className="btn btn-sm btn-light rounded-circle p-1">
                <FaChevronRight size={12} />
              </button>
            </div>
          </div>

          <div className="d-flex justify-content-between text-center">
            {days.map((day, idx) => (
              <div key={day} style={{ width: 60 }}>
                <small className="text-muted">{day}</small>

                {/* Hoverable blue circle date */}
                <div className="mt-1 date-circle">
                  {dates[idx]}
                </div>

                {/* Show appointment icons and times */}
                {day === "Wed" && (
                  <div style={{ fontSize: "0.9rem", marginTop: "4px" }}>
                    🦷<br />
                    <small>10:00 AM</small>
                  </div>
                )}
                {day === "Fri" && (
                  <div style={{ fontSize: "0.9rem", marginTop: "4px" }}>
                    🏃‍♀️<br />
                    <small>4:00 PM</small>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

