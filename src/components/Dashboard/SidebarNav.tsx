import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  LayoutGrid, 
  Users, 
  User, 
  FileText, 
  Receipt, 
  ShoppingBag, 
  Mail, 
  Archive, 
  CalendarDays, 
  Settings, 
  HelpCircle 
} from 'lucide-react';

interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType;
  active?: boolean;
}

const navItems: NavItem[] = [
  { href: '#', label: 'Dashboard', icon: LayoutGrid, active: true },
  { href: '#', label: 'Leads', icon: Users },
  { href: '#', label: 'Customers', icon: User },
  { href: '#', label: 'Proposals', icon: FileText },
  { href: '#', label: 'Invoices', icon: Receipt },
  { href: '#', label: 'Items', icon: ShoppingBag },
  { href: '#', label: 'Mail', icon: Mail },
  { href: '#', label: 'Shoebox', icon: Archive },
  { href: '#', label: 'Calendar', icon: CalendarDays },
];

const bottomNavItems: NavItem[] = [
  { href: '#', label: 'Help', icon: HelpCircle },
  { href: '#', label: 'Settings', icon: Settings },
];

const SidebarNav: React.FC = () => {
  return (
    <aside className="w-64 flex-shrink-0 bg-sidebar text-sidebar-foreground p-4 flex flex-col justify-between">
      <div>
        <div className="h-16 flex items-center px-2 mb-4">
          {/* Placeholder for Logo if it were here */}
        </div>
        <nav className="flex flex-col space-y-1">
          {navItems.map((item) => (
            <Button
              key={item.label}
              variant={item.active ? 'secondary' : 'ghost'}
              className={cn(
                'w-full justify-start',
                item.active && 'bg-accent text-accent-foreground'
              )}
              asChild
            >
              <a href={item.href}>
                <item.icon className="mr-3 h-5 w-5" />
                {item.label}
              </a>
            </Button>
          ))}
        </nav>
      </div>
      <nav className="flex flex-col space-y-1">
        {bottomNavItems.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            className="w-full justify-start"
            asChild
          >
            <a href={item.href}>
              <item.icon className="mr-3 h-5 w-5" />
              {item.label}
            </a>
          </Button>
        ))}
         {/* A second help icon is shown in the design */}
        <Button variant="ghost" className="w-full justify-start" asChild>
          <a href="#">
            <HelpCircle className="mr-3 h-5 w-5" />
            Help
          </a>
        </Button>
      </nav>
    </aside>
  );
};

export default SidebarNav;
