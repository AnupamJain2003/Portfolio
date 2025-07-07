export const Card = ({ children }) => (
  <div className="rounded-lg shadow-md bg-white dark:bg-gray-900">{children}</div>
);
export const CardContent = ({ children, className = '' }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);
