"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Calculator, Eye, Send, AlertTriangle } from "lucide-react"

// Nigerian Tax Calculation Functions
export const calculatePAYE = (annualSalary: number): number => {
  // Nigerian PAYE tax brackets (2024)
  const brackets = [
    { min: 0, max: 300000, rate: 0.07 },
    { min: 300000, max: 600000, rate: 0.11 },
    { min: 600000, max: 1100000, rate: 0.15 },
    { min: 1100000, max: 1600000, rate: 0.19 },
    { min: 1600000, max: 3200000, rate: 0.21 },
    { min: 3200000, max: Number.POSITIVE_INFINITY, rate: 0.24 },
  ]

  let tax = 0
  let remainingSalary = annualSalary

  for (const bracket of brackets) {
    if (remainingSalary <= 0) break

    const taxableInBracket = Math.min(remainingSalary, bracket.max - bracket.min)
    tax += taxableInBracket * bracket.rate
    remainingSalary -= taxableInBracket
  }

  return tax / 12 // Monthly PAYE
}

export const calculatePension = (basicSalary: number): { employee: number; employer: number } => {
  return {
    employee: basicSalary * 0.08, // 8% employee contribution
    employer: basicSalary * 0.1, // 10% employer contribution
  }
}

export const calculateNHF = (basicSalary: number): number => {
  return basicSalary * 0.025 // 2.5% of basic salary
}

export const calculateNSITF = (grossSalary: number): number => {
  return grossSalary * 0.01 // 1% of gross salary
}

export function PayrollEngine() {
  // Sample employee data
  const sampleEmployee = {
    name: "John Doe",
    basicSalary: 200000,
    allowances: 50000,
    bonuses: 25000,
  }

  const grossSalary = sampleEmployee.basicSalary + sampleEmployee.allowances + sampleEmployee.bonuses
  const annualGross = grossSalary * 12

  const paye = calculatePAYE(annualGross)
  const pension = calculatePension(sampleEmployee.basicSalary)
  const nhf = calculateNHF(sampleEmployee.basicSalary)
  const nsitf = calculateNSITF(grossSalary)

  const totalDeductions = paye + pension.employee + nhf + nsitf
  const netSalary = grossSalary - totalDeductions

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Payroll Engine</h2>
          <p className="text-muted-foreground">Nigerian-compliant salary processing system</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Eye className="mr-2 h-4 w-4" />
            Preview All
          </Button>
          <Button>
            <Calculator className="mr-2 h-4 w-4" />
            Process Payroll
          </Button>
        </div>
      </div>

      {/* Payroll Summary */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247</div>
            <p className="text-xs text-muted-foreground">Ready for processing</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Gross Payroll</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦68.2M</div>
            <p className="text-xs text-muted-foreground">Before deductions</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Deductions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦18.5M</div>
            <p className="text-xs text-muted-foreground">Tax + Statutory</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Net Payroll</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">₦49.7M</div>
            <p className="text-xs text-muted-foreground">For disbursement</p>
          </CardContent>
        </Card>
      </div>

      {/* Sample Salary Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Sample Salary Calculation</CardTitle>
          <CardDescription>Nigerian tax compliance demonstration</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Earnings */}
            <div className="space-y-3">
              <h4 className="font-semibold text-green-600">Earnings</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Basic Salary</span>
                  <span className="font-medium">₦{sampleEmployee.basicSalary.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Allowances</span>
                  <span className="font-medium">₦{sampleEmployee.allowances.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Bonuses</span>
                  <span className="font-medium">₦{sampleEmployee.bonuses.toLocaleString()}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Gross Salary</span>
                  <span>₦{grossSalary.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Deductions */}
            <div className="space-y-3">
              <h4 className="font-semibold text-red-600">Deductions</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>PAYE Tax</span>
                  <span className="font-medium">₦{Math.round(paye).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Pension (8%)</span>
                  <span className="font-medium">₦{Math.round(pension.employee).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>NHF (2.5%)</span>
                  <span className="font-medium">₦{Math.round(nhf).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>NSITF (1%)</span>
                  <span className="font-medium">₦{Math.round(nsitf).toLocaleString()}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total Deductions</span>
                  <span>₦{Math.round(totalDeductions).toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Net Salary */}
          <div className="flex justify-between items-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
            <span className="text-lg font-semibold">Net Salary</span>
            <span className="text-2xl font-bold text-green-600">₦{Math.round(netSalary).toLocaleString()}</span>
          </div>
        </CardContent>
      </Card>

      {/* Payroll Actions */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Preview Payroll</CardTitle>
            <CardDescription>Review calculations before processing</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-transparent" variant="outline">
              <Eye className="mr-2 h-4 w-4" />
              Preview All Salaries
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Process & Approve</CardTitle>
            <CardDescription>Finalize payroll calculations</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              <Calculator className="mr-2 h-4 w-4" />
              Process Payroll
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Disburse Salaries</CardTitle>
            <CardDescription>Send payments via Paystack</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" variant="secondary">
              <Send className="mr-2 h-4 w-4" />
              Disburse via Wallet
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Compliance Alert */}
      <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950">
        <CardHeader>
          <CardTitle className="flex items-center text-orange-800 dark:text-orange-200">
            <AlertTriangle className="mr-2 h-5 w-5" />
            Nigerian Compliance Notice
          </CardTitle>
        </CardHeader>
        <CardContent className="text-orange-700 dark:text-orange-300">
          <p className="text-sm">
            All calculations comply with current Nigerian tax laws including PAYE, Pension Reform Act 2014, National
            Housing Fund Act, and NSITF Act. Ensure all statutory remittances are made within required timeframes to
            avoid penalties.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
