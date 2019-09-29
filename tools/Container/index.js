import React from 'react';

export default function Container({ children, style }) {
  return (
    <div style={{ minHeight: 500, justifyContent: 'center', alignItems: 'center', display: 'flex', ...style }}>
      {children}
    </div>
  )
}