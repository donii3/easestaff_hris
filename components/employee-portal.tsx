"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Download, FileText, Bell, User, Calendar, Upload, Eye, Star, CheckCircle2 } from "lucide-react"

export function EmployeePortal() {
  // Sample employee data
  const employee = {
    name: "Sarah Johnson",
    id: "EMP001",
    role: "Mathematics Teacher",
    department: "Academic",
    joinDate: "March 15, 2024",
    avatar: "SJ",
    currentSalary: {
      basic: 180000,
      allowances: 45000,
      bonuses: 15000,
      gross: 240000,
      deductions: 52000,
      net: 188000,
    },
    performance: {
      currentRating: 4.2,
      totalReviews: 3,
      lastReview: "February 2024",
    },
  }

  return (
    <div className="space-y-6">
      {/* Employee Header */}
      <div className="flex items-center space-x-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src="/placeholder.svg?height=64&width=64" />
          <AvatarFallback className="text-lg">{employee.avatar}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{employee.name}</h1>
          <p className="text-muted-foreground">
            {employee.role} • {employee.department}
          </p>
          <p className="text-sm text-muted-foreground">
            Employee ID: {employee.id} • Joined {employee.joinDate}
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <User className="mr-2 h-4 w-4" />
            Edit Profile
          </Button>
          <Button>
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Current Salary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦{employee.currentSalary.net.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Net monthly pay</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Performance Rating</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{employee.performance.currentRating}/5.0</div>
            <p className="text-xs text-muted-foreground">Based on {employee.performance.totalReviews} reviews</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Available for download</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Unread messages</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="salary" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="salary">Salary</TabsTrigger>
          <TabsTrigger value="payslips">Payslips</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        {/* Salary Tab */}
        <TabsContent value="salary" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Current Salary Breakdown</CardTitle>
              <CardDescription>Your monthly salary structure and deductions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Earnings */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-green-600">Earnings</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Basic Salary</span>
                      <span className="font-medium">₦{employee.currentSalary.basic.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Allowances</span>
                      <span className="font-medium">₦{employee.currentSalary.allowances.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bonuses</span>
                      <span className="font-medium">₦{employee.currentSalary.bonuses.toLocaleString()}</span>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between font-semibold">
                        <span>Gross Salary</span>
                        <span>₦{employee.currentSalary.gross.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Deductions */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-red-600">Deductions</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>PAYE Tax</span>
                      <span className="font-medium">₦25,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Pension (8%)</span>
                      <span className="font-medium">₦14,400</span>
                    </div>
                    <div className="flex justify-between">
                      <span>NHF (2.5%)</span>
                      <span className="font-medium">₦4,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>NSITF (1%)</span>
                      <span className="font-medium">₦2,400</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Other Deductions</span>
                      <span className="font-medium">₦5,700</span>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between font-semibold">
                        <span>Total Deductions</span>
                        <span>₦{employee.currentSalary.deductions.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Net Salary</span>
                  <span className="text-2xl font-bold text-green-600">
                    ₦{employee.currentSalary.net.toLocaleString()}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Salary History */}
          <Card>
            <CardHeader>
              <CardTitle>Salary History</CardTitle>
              <CardDescription>Your salary progression over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { month: "March 2024", amount: 188000, status: "Paid" },
                  { month: "February 2024", amount: 188000, status: "Paid" },
                  { month: "January 2024", amount: 175000, status: "Paid" },
                  { month: "December 2023", amount: 175000, status: "Paid" },
                ].map((record, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{record.month}</p>
                      <p className="text-sm text-muted-foreground">Net Salary</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">₦{record.amount.toLocaleString()}</p>
                      <Badge variant="default">{record.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Payslips Tab */}
        <TabsContent value="payslips" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Download Payslips</CardTitle>
              <CardDescription>Access your monthly payslips in PDF format</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { month: "March 2024", date: "2024-03-31", size: "245 KB" },
                  { month: "February 2024", date: "2024-02-29", size: "238 KB" },
                  { month: "January 2024", date: "2024-01-31", size: "242 KB" },
                  { month: "December 2023", date: "2023-12-31", size: "251 KB" },
                ].map((payslip, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-8 w-8 text-blue-600" />
                      <div>
                        <p className="font-medium">{payslip.month} Payslip</p>
                        <p className="text-sm text-muted-foreground">
                          Generated on {payslip.date} • {payslip.size}
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </Button>
                      <Button size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Performance Tab */}
        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Performance Overview</CardTitle>
              <CardDescription>Your performance ratings and feedback</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600">{employee.performance.currentRating}</div>
                    <div className="flex justify-center space-x-1 mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-5 w-5 ${
                            star <= employee.performance.currentRating
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">Overall Rating</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Teaching Quality</span>
                      <span>4.5/5</span>
                    </div>
                    <Progress value={90} className="mt-1" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Student Engagement</span>
                      <span>4.2/5</span>
                    </div>
                    <Progress value={84} className="mt-1" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Punctuality</span>
                      <span>4.0/5</span>
                    </div>
                    <Progress value={80} className="mt-1" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Teamwork</span>
                      <span>4.3/5</span>
                    </div>
                    <Progress value={86} className="mt-1" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Reviews */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Performance Reviews</CardTitle>
              <CardDescription>Feedback from your supervisors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    date: "February 2024",
                    reviewer: "Dr. Mary Adebayo",
                    rating: 4.2,
                    comment:
                      "Excellent teaching methods and student engagement. Shows great improvement in classroom management.",
                  },
                  {
                    date: "November 2023",
                    reviewer: "Prof. James Okafor",
                    rating: 4.0,
                    comment:
                      "Good performance overall. Recommended to focus more on punctuality and administrative tasks.",
                  },
                ].map((review, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-medium">{review.date}</p>
                        <p className="text-sm text-muted-foreground">Reviewed by {review.reviewer}</p>
                      </div>
                      <Badge variant="secondary">{review.rating}/5.0</Badge>
                    </div>
                    <p className="text-sm">{review.comment}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Documents Tab */}
        <TabsContent value="documents" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {/* My Documents */}
            <Card>
              <CardHeader>
                <CardTitle>My Documents</CardTitle>
                <CardDescription>Documents you've uploaded</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "National ID Card", type: "PDF", size: "1.2 MB", date: "Mar 15, 2024" },
                    { name: "Teaching Certificate", type: "PDF", size: "890 KB", date: "Mar 15, 2024" },
                    { name: "University Degree", type: "PDF", size: "1.5 MB", date: "Mar 15, 2024" },
                  ].map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-6 w-6 text-blue-600" />
                        <div>
                          <p className="font-medium text-sm">{doc.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {doc.type} • {doc.size} • {doc.date}
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 bg-transparent" variant="outline">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload New Document
                </Button>
              </CardContent>
            </Card>

            {/* HR Documents */}
            <Card>
              <CardHeader>
                <CardTitle>HR Documents</CardTitle>
                <CardDescription>Documents from administration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "Employment Contract", type: "PDF", size: "2.1 MB", date: "Mar 15, 2024" },
                    { name: "Job Description", type: "PDF", size: "456 KB", date: "Mar 15, 2024" },
                    { name: "Performance Review", type: "PDF", size: "678 KB", date: "Feb 28, 2024" },
                    { name: "Salary Structure", type: "PDF", size: "234 KB", date: "Jan 15, 2024" },
                  ].map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-6 w-6 text-green-600" />
                        <div>
                          <p className="font-medium text-sm">{doc.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {doc.type} • {doc.size} • {doc.date}
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Notifications</CardTitle>
              <CardDescription>Important updates and announcements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Salary Disbursed",
                    message: "Your March 2024 salary has been successfully disbursed to your account.",
                    time: "2 hours ago",
                    type: "success",
                    read: false,
                  },
                  {
                    title: "Performance Review Available",
                    message: "Your February performance review is now available for viewing.",
                    time: "1 day ago",
                    type: "info",
                    read: false,
                  },
                  {
                    title: "New Document Uploaded",
                    message: "HR has uploaded your updated employment contract.",
                    time: "3 days ago",
                    type: "document",
                    read: true,
                  },
                  {
                    title: "Holiday Announcement",
                    message: "School will be closed for Easter holidays from April 10-17, 2024.",
                    time: "1 week ago",
                    type: "announcement",
                    read: true,
                  },
                ].map((notification, index) => (
                  <div
                    key={index}
                    className={`p-4 border rounded-lg ${!notification.read ? "bg-blue-50 dark:bg-blue-950 border-blue-200" : ""}`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-medium">{notification.title}</h4>
                          {!notification.read && (
                            <Badge variant="secondary" className="text-xs">
                              New
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                        <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {notification.type === "success" && <CheckCircle2 className="h-5 w-5 text-green-600" />}
                        {notification.type === "info" && <Bell className="h-5 w-5 text-blue-600" />}
                        {notification.type === "document" && <FileText className="h-5 w-5 text-purple-600" />}
                        {notification.type === "announcement" && <Calendar className="h-5 w-5 text-orange-600" />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
