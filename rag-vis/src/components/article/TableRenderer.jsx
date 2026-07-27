export default function TableRenderer({ children }) {
  return (
    <div className="overflow-x-auto my-4">
      {children}
    </div>
  );
}