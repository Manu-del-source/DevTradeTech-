import React from 'react';

export function SkeletonCard() {
  return (
    <div className="card animate-pulse">
      <div className="card-icon bg-slate-700/50"></div>
      <div className="card-content w-full">
        <div className="h-5 bg-slate-700/50 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-slate-700/50 rounded w-3/4"></div>
      </div>
      <div className="px-4 py-2 bg-slate-700/50 rounded-lg w-32 h-9 flex-shrink-0 ml-auto"></div>
    </div>
  );
}

export function SkeletonCategoryCard() {
  return (
    <div className="card group animate-pulse">
      <div className="card-icon bg-slate-700/50"></div>
      <div className="card-content w-full">
        <div className="h-5 bg-slate-700/50 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-slate-700/50 rounded w-3/4"></div>
      </div>
      <div className="w-6 h-6 bg-slate-700/50 rounded-full flex-shrink-0"></div>
    </div>
  );
}
