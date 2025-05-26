
import React from "react";
import { 
  FaTachometerAlt, FaHistory, FaCalendarAlt, FaUserMd, FaChartBar,
  FaComments, FaHeadset, FaCog
} from "react-icons/fa";
import "./Sidebar.css";

const sections = [
  { heading: "General", items: [
    { label: "Dashboard", icon: <FaTachometerAlt /> },
    { label: "History", icon: <FaHistory /> },
    { label: "Calendar", icon: <FaCalendarAlt /> },
    { label: "Appointments", icon: <FaUserMd /> },
    { label: "Statistics", icon: <FaChartBar /> }
  ]},
  { heading: "Tools", items: [
    { label: "Chat", icon: <FaComments /> },
    { label: "Support", icon: <FaHeadset /> },
  ]}
];

export default function Sidebar() {
  return (
    <aside className="sidebar d-flex flex-column p-3">
      <h4 className="fw-bold mb-4 brand text-primary">Healthcare.</h4>

      {sections.map(section => (
        <div key={section.heading} className="mb-4">
          <small className="text-muted text-uppercase">{section.heading}</small>
          <ul className="nav flex-column">
            {section.items.map(item => (
              <li key={item.label} className="nav-item my-2">
                <span className="nav-link d-flex align-items-center gap-2">
                  {item.icon} {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="mt-auto">
        <span className="nav-link d-flex align-items-center gap-2">
          <FaCog /> Setting
        </span>
      </div>
    </aside>
  );
}
