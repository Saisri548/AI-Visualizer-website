import {
  Info,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const variants = {
  info: {
    icon: Info,
    border: "border-blue-300",
    bg: "bg-blue-50",
    title: "text-blue-800",
    iconColor: "text-blue-600",
  },

  tip: {
    icon: Lightbulb,
    border: "border-yellow-300",
    bg: "bg-yellow-50",
    title: "text-yellow-800",
    iconColor: "text-yellow-600",
  },

  warning: {
    icon: AlertTriangle,
    border: "border-orange-300",
    bg: "bg-orange-50",
    title: "text-orange-800",
    iconColor: "text-orange-600",
  },

  success: {
    icon: CheckCircle2,
    border: "border-green-300",
    bg: "bg-green-50",
    title: "text-green-800",
    iconColor: "text-green-600",
  },

  danger: {
    icon: XCircle,
    border: "border-red-300",
    bg: "bg-red-50",
    title: "text-red-800",
    iconColor: "text-red-600",
  },
};

export default function Callout({
  type = "info",
  title,
  content,
}) {
  const style = variants[type] || variants.info;
  const Icon = style.icon;

  return (
    <div
      className={`rounded-2xl border-l-4 ${style.border} ${style.bg} p-6 shadow-sm`}
    >
      <div className="flex gap-4">
        <Icon className={`mt-1 h-6 w-6 ${style.iconColor}`} />

        <div className="flex-1">
          <h3 className={`text-lg font-semibold ${style.title}`}>
            {title}
          </h3>

          <p className="mt-2 leading-7 text-slate-700">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}