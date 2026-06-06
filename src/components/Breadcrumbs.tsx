import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-8 overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide">
      <Link to="/" className="hover:text-teal-400 transition-colors flex items-center gap-1">
        <Home size={14} />
      </Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight size={12} className="text-slate-700 shrink-0" />
          {item.path ? (
            <Link to={item.path} className="hover:text-teal-400 transition-colors uppercase tracking-widest">
              {item.label}
            </Link>
          ) : (
            <span className="text-slate-300 uppercase tracking-widest">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
