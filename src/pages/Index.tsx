import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { TopNavigation } from "@/components/TopNavigation";
import { StatsCard } from "@/components/StatsCard";

const statsData = [
  {
    title: "Active Jobs",
    value: "43.7k",
    change: "+12.2%",
    isPositive: true,
    chartColor: "blue" as const,
  },
  {
    title: "Jobs In Progress", 
    value: "92.3k",
    change: "-11%",
    isPositive: false,
    chartColor: "orange" as const,
  },
  {
    title: "Finished Jobs",
    value: "66.3k", 
    change: "+3.3%",
    isPositive: true,
    chartColor: "green" as const,
  },
  {
    title: "New Leads",
    value: "92.3k",
    change: "+11%", 
    isPositive: true,
    chartColor: "purple" as const,
  },
];

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          <TopNavigation />
          
          <main className="flex-1 p-6">
            {/* Welcome Section */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-text-primary mb-2">
                Welcome back, Julie 👋
              </h1>
              <p className="text-text-secondary">
                Here's what you need to focus on today
              </p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 max-w-full">
              {statsData.map((stat, index) => (
                <StatsCard
                  key={index}
                  title={stat.title}
                  value={stat.value}
                  change={stat.change}
                  isPositive={stat.isPositive}
                  chartColor={stat.chartColor}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;