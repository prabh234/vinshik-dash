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
  const bgColorClass = backgroundColorClasses[chartColor];
  
  return (
    <Card className="border border-border shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-text-secondary">{title}</p>
            <div className="flex items-center gap-2 mt-1">
              <div className={`px-2 py-1 rounded-full ${bgColorClass} flex items-center gap-1`}>
                {isPositive ? (
                  <TrendingUp className="w-3 h-3 text-success" />
                ) : (
                  <TrendingDown className="w-3 h-3 text-error" />
                )}
                <span className={`text-xs font-medium ${isPositive ? 'text-success' : 'text-error'}`}>
                  {change}
                </span>
              </div>
            </div>
          </div>
          <MiniChart color={chartColor} />
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="text-2xl font-bold text-text-primary">{value}</div>
      </CardContent>
    </Card>
  );
}