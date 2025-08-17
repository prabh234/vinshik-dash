import { TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  chartColor: "blue" | "orange" | "green" | "purple";
}

const chartColorClasses = {
  blue: "bg-chart-blue",
  orange: "bg-chart-orange", 
  green: "bg-chart-green",
  purple: "bg-chart-purple"
};

const backgroundColorClasses = {
  blue: "bg-status-blue-bg",
  orange: "bg-status-orange-bg",
  green: "bg-status-green-bg", 
  purple: "bg-status-purple-bg"
};

// Simple chart visualization
function MiniChart({ color }: { color: "blue" | "orange" | "green" | "purple" }) {
  const baseClass = chartColorClasses[color];
  
  return (
    <div className="flex items-end gap-1 h-12 w-16">
      <div className={`${baseClass} w-2 h-4 rounded-sm opacity-40`}></div>
      <div className={`${baseClass} w-2 h-6 rounded-sm opacity-60`}></div>
      <div className={`${baseClass} w-2 h-8 rounded-sm opacity-80`}></div>
      <div className={`${baseClass} w-2 h-12 rounded-sm`}></div>
      <div className={`${baseClass} w-2 h-7 rounded-sm opacity-70`}></div>
      <div className={`${baseClass} w-2 h-9 rounded-sm opacity-90`}></div>
    </div>
  );
}

export function StatsCard({ title, value, change, isPositive, chartColor }: StatsCardProps) {
  return (
    <Card className="border-0 bg-card shadow-sm rounded-2xl overflow-hidden">
      <div className="p-4">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-text-secondary mb-2 truncate">{title}</p>
            <div className="flex items-center gap-2">
              {isPositive ? (
                <TrendingUp className="w-3 h-3 text-success flex-shrink-0" />
              ) : (
                <TrendingDown className="w-3 h-3 text-error flex-shrink-0" />
              )}
              <span className={`text-xs font-medium ${isPositive ? 'text-success' : 'text-error'}`}>
                {change}
              </span>
            </div>
          </div>
          <div className="flex-shrink-0 ml-3">
            <MiniChart color={chartColor} />
          </div>
        </div>
        <div className="text-2xl font-bold text-text-primary leading-tight">{value}</div>
      </div>
    </Card>
  );
}