import { useState } from "react";
import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/common/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/common/components/ui/sheet";
import { useMediaQuery } from "@/common/hooks/useMediaQuery";
import ThemeToggle from "@/common/components/ThemeToggle/ThemeToggle";

interface LayoutProps {
  children: ReactNode;
}

interface NavItemProps {
  to: string;
  children: ReactNode;
  className?: string;
}

function NavItem({ to, children, className }: NavItemProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={cn(
        "flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors",
        isActive
          ? "bg-primary text-primary-foreground"
          : "hover:bg-accent hover:text-accent-foreground",
        className
      )}
    >
      {children}
    </Link>
  );
}

export function Layout({ children }: LayoutProps) {
  const [open, setOpen] = useState(false);
  const isMediumScreen = useMediaQuery("(min-width: 768px)");

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/help", label: "Help" },
  ];

  const renderNavItems = () => (
    <>
      {navItems.map((item) => (
        <NavItem key={item.path} to={item.path}>
          {item.label}
        </NavItem>
      ))}
    </>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-background sticky top-0 z-10">
        <div className="container flex h-16 items-center px-4">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[280px]">
              <div className="font-bold text-lg mt-2 mb-6">
                Copilot Playground
              </div>
              <nav className="flex flex-col gap-2">{renderNavItems()}</nav>
            </SheetContent>
          </Sheet>
          <div className="font-bold text-lg mr-4">Copilot Playground</div>
          <div className="flex-1"></div>
          <ThemeToggle />
        </div>
      </header>

      <div className="flex-1 flex">
        {isMediumScreen && (
          <nav className="flex flex-col gap-2 w-[240px] p-4 border-r h-[calc(100vh-4rem)] sticky top-16">
            {renderNavItems()}
          </nav>
        )}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
