'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, FileText, Download, Eye, Plus, RefreshCw } from 'lucide-react'
import Link from 'next/link'
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

interface MedicalRecord {
  id: string
  type: string
  date: string
  doctor: string
  description: string
  fileUrl: string
}

const mockRecords: MedicalRecord[] = [
  {
    id: '1',
    type: 'General Checkup',
    date: '2023-12-01',
    doctor: 'Dr. Sarah Mitchell',
    description: 'Annual physical examination',
    fileUrl: '#'
  },
  {
    id: '2',
    type: 'Blood Test',
    date: '2023-12-05',
    doctor: 'Dr. Michael Thompson',
    description: 'Complete blood count and metabolic panel',
    fileUrl: '#'
  }
]

export default function MyRecordsPage() {
  const [records, setRecords] = useState<MedicalRecord[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [newRecord, setNewRecord] = useState<Partial<MedicalRecord>>({
    type: '',
    date: '',
    doctor: '',
    description: '',
  })

  const fetchRecords = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch('/api/medical-records')

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const contentType = response.headers.get('content-type')
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Server did not return JSON')
      }

      const data = await response.json()
      if (!Array.isArray(data)) {
        throw new Error('Invalid data format: expected an array')
      }

      setRecords(data)
    } catch (error) {
      console.error('Error fetching records:', error)
      let errorMessage = 'An unexpected error occurred'
      if (error instanceof Error) {
        errorMessage = error.message
      } else if (error && typeof error === 'object' && Object.keys(error).length === 0) {
        errorMessage = 'Empty error object received'
      }
      setError(errorMessage)
      setRecords(mockRecords)
      toast.error(`Failed to load medical records. ${errorMessage}`)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchRecords()
  }, [])

  const filteredRecords = records.filter(record =>
    record.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleDownload = (fileUrl: string) => {
    toast.success('Starting download...')
  }

  const handleView = (fileUrl: string) => {
    toast.info('Opening record...')
  }

  const handleAddRecord = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const newId = (records.length + 1).toString()
      const recordToAdd: MedicalRecord = {
        id: newId,
        type: newRecord.type || '',
        date: newRecord.date || '',
        doctor: newRecord.doctor || '',
        description: newRecord.description || '',
        fileUrl: '#'
      }

      setRecords([...records, recordToAdd])
      toast.success('Record added successfully')
      setNewRecord({ type: '', date: '', doctor: '', description: '' })
    } catch (error) {
      console.error('Error adding record:', error)
      toast.error('Failed to add record')
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <SiteHeader />
      <main className="flex-grow">
        <div className="bg-[#40C7B9] text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Medical Records</h1>
            <div className="flex items-center space-x-2 text-sm">
              <Link href="/" className="hover:text-white/80">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span>My Records</span>
            </div>
          </div>
        </div>

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-center mb-8">
                <div className="flex-1 max-w-md">
                  <Input
                    type="search"
                    placeholder="Search records..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full"
                  />
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="ml-4 bg-[#40C7B9] hover:bg-[#3BB5A8]">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Record
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Medical Record</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleAddRecord} className="space-y-4">
                      <div>
                        <Label htmlFor="type">Record Type</Label>
                        <Input
                          id="type"
                          value={newRecord.type}
                          onChange={(e) => setNewRecord({ ...newRecord, type: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="date">Date</Label>
                        <Input
                          id="date"
                          type="date"
                          value={newRecord.date}
                          onChange={(e) => setNewRecord({ ...newRecord, date: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="doctor">Doctor</Label>
                        <Input
                          id="doctor"
                          value={newRecord.doctor}
                          onChange={(e) => setNewRecord({ ...newRecord, doctor: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="description">Description</Label>
                        <Input
                          id="description"
                          value={newRecord.description}
                          onChange={(e) => setNewRecord({ ...newRecord, description: e.target.value })}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full bg-[#40C7B9] hover:bg-[#3BB5A8]">
                        Add Record
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>

              {isLoading ? (
                <div className="flex justify-center items-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#40C7B9]"></div>
                </div>
              ) : error ? (
                <div className="text-center py-8">
                  <p className="text-red-500 mb-4">Error: {error}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">Showing sample data.</p>
                  <Button 
                    onClick={fetchRecords} 
                    className="bg-[#40C7B9] hover:bg-[#3BB5A8]"
                  >
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Retry
                  </Button>
                </div>
              ) : filteredRecords.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50 dark:bg-gray-700">
                        <th className="px-4 py-3 text-left">Type</th>
                        <th className="px-4 py-3 text-left">Date</th>
                        <th className="px-4 py-3 text-left">Doctor</th>
                        <th className="px-4 py-3 text-left">Description</th>
                        <th className="px-4 py-3 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredRecords.map((record) => (
                        <tr key={record.id} className="border-b dark:border-gray-600">
                          <td className="px-4 py-3">
                            <div className="flex items-center">
                              <FileText className="h-5 w-5 mr-2 text-[#40C7B9]" />
                              {record.type}
                            </div>
                          </td>
                          <td className="px-4 py-3">{record.date}</td>
                          <td className="px-4 py-3">{record.doctor}</td>
                          <td className="px-4 py-3">{record.description}</td>
                          <td className="px-4 py-3">
                            <Button
                              size="sm"
                              variant="outline"
                              className="mr-2"
                              onClick={() => handleView(record.fileUrl)}
                            >
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleDownload(record.fileUrl)}
                            >
                              <Download className="h-4 w-4 mr-1" />
                              Download
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  No records found
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

