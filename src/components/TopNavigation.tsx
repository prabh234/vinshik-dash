import { Bell, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function TopNavigation() {
  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="text-text-secondary hover:text-text-primary" />
      </div>
      
      <div className="flex items-center gap-4">
        {/* Notification Icon */}
        <Button variant="ghost" size="icon" className="relative hover:bg-background">
          <Bell className="w-5 h-5 text-text-secondary" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-teal rounded-full border-2 border-white"></div>
        </Button>
        
        {/* Mail Icon */}
        <Button variant="ghost" size="icon" className="hover:bg-background">
          <Mail className="w-5 h-5 text-text-secondary" />
        </Button>
        
        {/* User Profile */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center">
          <span className="text-white text-sm font-medium">J</span>
        </div>
      </div>
    </header>
  );
}