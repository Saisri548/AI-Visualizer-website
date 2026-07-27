export default function Callout({ children, type = "info" }) {
  return (
    <div
      className={`rounded-lg border-l-4 p-4 my-4 ${
        type === "warning"
          ? "bg-yellow-50 border-yellow-500"
          : type === "success"
          ? "bg-green-50 border-green-500"
          : "bg-blue-50 border-blue-500"
      }`}
    >
      {children}
    </div>
  );
}