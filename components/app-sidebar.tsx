"use client"

import type * as React from "react"
import {
  Users,
  DollarSign,
  FileText,
  TrendingUp,
  Megaphone,
  MessageSquare,
  Settings,
  LayoutDashboard,
  Wallet,
  Building2,
  UserPlus,
  Calculator,
  Receipt,
  Target,
  Upload,
  CreditCard,
  Shield,
  Bell,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"

const data = {
  user: {
    name: "Admin User",
    email: "admin@easestaff.com",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  teams: [
    {
      name: "EaseStaff™ HRIS",
      logo: Building2,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Staff Management",
      url: "#",
      icon: Users,
      items: [
        {
          title: "All Employees",
          url: "#",
        },
        {
          title: "Add Employee",
          url: "#",
          icon: UserPlus,
        },
        {
          title: "Employee Records",
          url: "#",
        },
        {
          title: "Salary Structure",
          url: "#",
        },
      ],
    },
    {
      title: "Payroll System",
      url: "#",
      icon: DollarSign,
      items: [
        {
          title: "Process Payroll",
          url: "#",
          icon: Calculator,
        },
        {
          title: "Payroll Preview",
          url: "#",
        },
        {
          title: "Payslips",
          url: "#",
          icon: Receipt,
        },
        {
          title: "Tax & Deductions",
          url: "#",
        },
        {
          title: "Payroll Reports",
          url: "#",
        },
      ],
    },
    {
      title: "Performance",
      url: "#",
      icon: TrendingUp,
      items: [
        {
          title: "KPI Management",
          url: "#",
          icon: Target,
        },
        {
          title: "Appraisals",
          url: "#",
        },
        {
          title: "Performance Reports",
          url: "#",
        },
        {
          title: "Review History",
          url: "#",
        },
      ],
    },
    {
      title: "Documents",
      url: "#",
      icon: FileText,
      items: [
        {
          title: "Upload Documents",
          url: "#",
          icon: Upload,
        },
        {
          title: "Document Library",
          url: "#",
        },
        {
          title: "Bulk Download",
          url: "#",
        },
        {
          title: "Staff Documents",
          url: "#",
        },
      ],
    },
    {
      title: "Wallet & Payments",
      url: "#",
      icon: Wallet,
      items: [
        {
          title: "Fund Wallet",
          url: "#",
          icon: CreditCard,
        },
        {
          title: "Payment History",
          url: "#",
        },
        {
          title: "Disbursements",
          url: "#",
        },
        {
          title: "Transaction Logs",
          url: "#",
        },
      ],
    },
    {
      title: "Announcements",
      url: "#",
      icon: Megaphone,
      items: [
        {
          title: "Create Announcement",
          url: "#",
        },
        {
          title: "All Announcements",
          url: "#",
        },
        {
          title: "Read Status",
          url: "#",
        },
      ],
    },
    {
      title: "Bulk SMS",
      url: "#",
      icon: MessageSquare,
      items: [
        {
          title: "Send SMS",
          url: "#",
        },
        {
          title: "SMS Templates",
          url: "#",
        },
        {
          title: "Delivery Reports",
          url: "#",
        },
      ],
    },
    {
      title: "Employee Portal",
      url: "#",
      icon: Bell,
      items: [
        {
          title: "Employee Dashboard",
          url: "#",
        },
        {
          title: "Salary History",
          url: "#",
        },
        {
          title: "My Documents",
          url: "#",
        },
        {
          title: "Performance Reviews",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "Company Profile",
          url: "#",
        },
        {
          title: "User Management",
          url: "#",
          icon: Shield,
        },
        {
          title: "System Settings",
          url: "#",
        },
        {
          title: "Security & Compliance",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center justify-between p-2">
          <ThemeToggle />
        </div>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
