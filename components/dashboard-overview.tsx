"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  DollarSign,
  TrendingUp,
  FileText,
  Calendar,
  CheckCircle2,
  Wallet,
  MessageSquare,
  UserPlus,
  Calculator,
  Target,
  Upload,
  CreditCard,
  Bell,
  Download,
  Send,
} from "lucide-react"

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Welcome to EaseStaff™</h1>
        <p className="text-muted-foreground">
          Complete HR management solution with Nigerian compliance for schools and SMEs
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247</div>
            <p className="text-xs text-muted-foreground">+12 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Payroll</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦45.2M</div>
            <p className="text-xs text-muted-foreground">+8.2% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Wallet Balance</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦12.8M</div>
            <p className="text-xs text-muted-foreground">Available for disbursement</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">Performance appraisals due</p>
          </CardContent>
        </Card>
      </div>

      {/* Admin Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Admin Quick Actions</CardTitle>
          <CardDescription>Essential HR operations at your fingertips</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="payroll" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="payroll">Payroll</TabsTrigger>
              <TabsTrigger value="staff">Staff</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="communication">Communication</TabsTrigger>
            </TabsList>

            <TabsContent value="payroll" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button className="h-20 flex-col gap-2">
                  <Calculator className="h-6 w-6" />
                  Process Payroll
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
                  <DollarSign className="h-6 w-6" />
                  Preview Salaries
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
                  <CreditCard className="h-6 w-6" />
                  Fund Wallet
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
                  <Download className="h-6 w-6" />
                  Download Payslips
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="staff" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button className="h-20 flex-col gap-2">
                  <UserPlus className="h-6 w-6" />
                  Add Employee
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
                  <Target className="h-6 w-6" />
                  Set KPIs
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
                  <TrendingUp className="h-6 w-6" />
                  Start Appraisal
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
                  <Users className="h-6 w-6" />
                  View All Staff
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="documents" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button className="h-20 flex-col gap-2">
                  <Upload className="h-6 w-6" />
                  Upload Documents
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
                  <FileText className="h-6 w-6" />
                  Document Library
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
                  <Download className="h-6 w-6" />
                  Bulk Download
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
                  <FileText className="h-6 w-6" />
                  Staff Files
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="communication" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button className="h-20 flex-col gap-2">
                  <Bell className="h-6 w-6" />
                  Create Announcement
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
                  <MessageSquare className="h-6 w-6" />
                  Send Bulk SMS
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
                  <Send className="h-6 w-6" />
                  Notify Staff
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
                  <Bell className="h-6 w-6" />
                  View Announcements
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Payroll Status & Nigerian Compliance */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Current Payroll Status</CardTitle>
            <CardDescription>March 2024 payroll cycle with Nigerian compliance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Processing Progress</span>
              <Badge variant="secondary">In Progress</Badge>
            </div>
            <Progress value={75} className="w-full" />

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Processed</span>
                <span className="font-medium">185/247 employees</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Gross Salary</span>
                <span className="font-medium">₦45.2M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">PAYE Tax</span>
                <span className="font-medium">₦6.8M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Pension (8%)</span>
                <span className="font-medium">₦3.6M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">NHF (2.5%)</span>
                <span className="font-medium">₦1.1M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Net Pay</span>
                <span className="font-medium text-green-600">₦33.7M</span>
              </div>
            </div>

            <Button className="w-full">
              <Calculator className="mr-2 h-4 w-4" />
              Continue Payroll Processing
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Nigerian Tax Compliance</CardTitle>
            <CardDescription>Automated calculations per Nigerian laws</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <p className="text-sm font-medium">PAYE Tax</p>
                  <p className="text-xs text-muted-foreground">Progressive tax calculation</p>
                </div>
                <Badge variant="default">Active</Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <p className="text-sm font-medium">Pension (RSA)</p>
                  <p className="text-xs text-muted-foreground">8% employee, 10% employer</p>
                </div>
                <Badge variant="default">Active</Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <p className="text-sm font-medium">NHF</p>
                  <p className="text-xs text-muted-foreground">2.5% of basic salary</p>
                </div>
                <Badge variant="default">Active</Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <p className="text-sm font-medium">NSITF</p>
                  <p className="text-xs text-muted-foreground">1% of gross salary</p>
                </div>
                <Badge variant="default">Active</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity & Upcoming Tasks */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest system updates and actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Payroll processed successfully</p>
                  <p className="text-xs text-muted-foreground">247 employees paid via Paystack - 2 hours ago</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                  <Users className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">New employee onboarded</p>
                  <p className="text-xs text-muted-foreground">
                    Sarah Johnson - Math Teacher with full KPIs - 5 hours ago
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                  <FileText className="h-4 w-4 text-purple-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Bulk documents uploaded</p>
                  <p className="text-xs text-muted-foreground">15 staff contracts and certificates - 1 day ago</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100">
                  <MessageSquare className="h-4 w-4 text-orange-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Bulk SMS sent</p>
                  <p className="text-xs text-muted-foreground">Salary notification to 247 staff - 2 days ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
            <CardDescription>Important deadlines and reminders</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Monthly payroll due</p>
                  <p className="text-xs text-muted-foreground">Process April salaries - Due in 5 days</p>
                </div>
                <Badge variant="destructive">High</Badge>
              </div>

              <div className="flex items-center space-x-3">
                <Target className="h-4 w-4 text-muted-foreground" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Performance reviews</p>
                  <p className="text-xs text-muted-foreground">23 appraisals pending completion - Due in 1 week</p>
                </div>
                <Badge variant="secondary">Medium</Badge>
              </div>

              <div className="flex items-center space-x-3">
                <FileText className="h-4 w-4 text-muted-foreground" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Tax filing deadline</p>
                  <p className="text-xs text-muted-foreground">PAYE returns to FIRS - Due in 2 weeks</p>
                </div>
                <Badge variant="outline">Low</Badge>
              </div>

              <div className="flex items-center space-x-3">
                <Wallet className="h-4 w-4 text-muted-foreground" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Wallet funding</p>
                  <p className="text-xs text-muted-foreground">Low balance alert - Fund for next payroll</p>
                </div>
                <Badge variant="secondary">Medium</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Employees with Enhanced Info */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Employees</CardTitle>
          <CardDescription>Newly added staff with complete profiles</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                name: "Sarah Johnson",
                role: "Mathematics Teacher",
                department: "Academic",
                status: "Active",
                avatar: "SJ",
                salary: "₦180,000",
                joinDate: "Mar 15, 2024",
              },
              {
                name: "Michael Adebayo",
                role: "IT Support Specialist",
                department: "Administration",
                status: "Active",
                avatar: "MA",
                salary: "₦150,000",
                joinDate: "Mar 12, 2024",
              },
              {
                name: "Grace Okafor",
                role: "English Teacher",
                department: "Academic",
                status: "Pending",
                avatar: "GO",
                salary: "₦175,000",
                joinDate: "Mar 10, 2024",
              },
              {
                name: "David Ogundimu",
                role: "Security Officer",
                department: "Operations",
                status: "Active",
                avatar: "DO",
                salary: "₦80,000",
                joinDate: "Mar 8, 2024",
              },
            ].map((employee, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 rounded-lg border">
                <Avatar>
                  <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                  <AvatarFallback>{employee.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">{employee.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {employee.role} • {employee.department}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {employee.salary} • Joined {employee.joinDate}
                  </p>
                </div>
                <Badge variant={employee.status === "Active" ? "default" : "secondary"}>{employee.status}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
