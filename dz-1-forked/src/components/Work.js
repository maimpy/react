import React, { useState } from "react";

function Work({ work }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="work-item">
      <div className="work-header" onClick={toggleExpand}>
        <h3 className="work-title">{work.title}</h3>
      </div>

      {isExpanded && (
        <div className="work-details">
          <p>
            <strong>Жанр:</strong> {work.type}
          </p>
          <p>
            <strong>Дата:</strong> {work.date}
          </p>
          <p>
            <strong>Опис:</strong> {work.description}
          </p>
        </div>
      )}
    </div>
  );
}

export default Work;
