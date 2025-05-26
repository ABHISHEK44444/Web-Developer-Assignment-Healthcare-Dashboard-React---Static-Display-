import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function ActivityChart() {
  // Data for appointments across the week
  const data = [
    { day: "Mon", Dentist: 0, Physio: 0 },
    { day: "Tue", Dentist: 0, Physio: 0 },
    { day: "Wed", Dentist: 1, Physio: 0 },  // 🦷 Dentist
    { day: "Thu", Dentist: 0, Physio: 0 },
    { day: "Fri", Dentist: 0, Physio: 1 },  // 🏃‍♀️ Physiotherapy
    { day: "Sat", Dentist: 0, Physio: 0 },
    { day: "Sun", Dentist: 0, Physio: 0 }
  ];

  // Calculate total appointments
  const totalAppointments = data.reduce(
    (sum, d) => sum + d.Dentist + d.Physio,
    0
  );

  return (
    <div className="card border-0 shadow-sm" style={{ borderRadius: "1rem" }}>

      <div className="col-md-12 text-md-end" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}>
            <span className="text-muted d-inline-flex align-items-center gap-1">
   Details &#x276F;
</span>

 </div>


      <div className="card-body">
        {/* Header with summary */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h6 className="card-title mb-0">Activity</h6>


         
          <small className="text-muted">
            {totalAppointments} appointment{totalAppointments !== 1 && "s"} this week
          </small>
        </div>

        {/* Line Chart */}
        <div style={{ width: "100%", height: 200 }}>
          <ResponsiveContainer>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="Dentist"
                stroke="#0d6efd"
                strokeWidth={2}
                dot={{ r: 5 }}
                name="Dentist"
              />
              <Line
                type="monotone"
                dataKey="Physio"
                stroke="#20c997"
                strokeWidth={2}
                dot={{ r: 5 }}
                name="Physiotherapy"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
