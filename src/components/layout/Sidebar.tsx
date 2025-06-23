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
  HelpCircle,
  Circle,
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

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-secondary text-secondary-foreground p-4 flex flex-col justify-between h-full border-r">
      <div>
        <div className="h-16 flex items-center px-2 mb-4">
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <Circle className="h-full w-full fill-black text-black" />
              <span className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold">BO</span>
            </div>
            <span className="font-bold text-lg text-foreground">Leads</span>
          </div>
        </div>
        <nav className="flex flex-col space-y-1">
          {navItems.map((item) => (
            <Button
              key={item.label}
              variant={item.active ? 'default' : 'ghost'}
              className={cn(
                'w-full justify-start',
                item.active
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
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
            className="w-full justify-start text-muted-foreground hover:text-foreground"
            asChild
          >
            <a href={item.href}>
              <item.icon className="mr-3 h-5 w-5" />
              {item.label}
            </a>
          </Button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
