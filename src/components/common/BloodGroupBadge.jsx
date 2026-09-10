import React from 'react';

export default function BloodGroupBadge({ bloodGroup, size = 'md' }) {
  const sizeClasses = {
    sm: 'badge bg-danger',
    md: 'badge bg-danger fs-6',
    lg: 'badge bg-danger fs-5 p-2'
  };

  return (
    <span className={sizeClasses[size]}>
      {bloodGroup}
    </span>
  );
}
