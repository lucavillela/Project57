import React from "react";

/**
 * Renders a translated string, turning `**text**` segments into bold text.
 */
export const renderRich = (text: string): React.ReactNode =>
  text.split(/\*\*(.+?)\*\*/g).map((part, index) =>
    index % 2 === 1 ? (
      <span key={index} className="font-bold">
        {part}
      </span>
    ) : (
      <React.Fragment key={index}>{part}</React.Fragment>
    )
  );
