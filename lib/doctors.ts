export interface Doctor {
  id: string
  name: string
  specialty: string
  image: string
  bio: string
  education: string[]
  experience: string[]
  rating: number
  reviewCount: number
  location: string
  phone: string
  email: string
}

export const doctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    image: "/team-member-1.jpg",
    bio: "Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience in treating heart conditions.",
    education: [
      "MD from Johns Hopkins University",
      "Cardiology Fellowship at Mayo Clinic"
    ],
    experience: [
      "Chief of Cardiology at City Hospital (2018-present)",
      "Senior Cardiologist at Heart Care Center (2010-2018)"
    ],
    rating: 4.9,
    reviewCount: 128,
    location: "123 Medical Center Drive",
    phone: "+1 (555) 123-4567",
    email: "sarah.johnson@mediclinic.com"
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    image: "/team-member-2.jpg",
    bio: "Dr. Michael Chen specializes in neurological disorders and has pioneered several innovative treatment approaches.",
    education: [
      "MD from Stanford University",
      "Neurology Residency at UCSF"
    ],
    experience: [
      "Director of Neurology at Metro Hospital (2019-present)",
      "Research Fellow at Brain Institute (2015-2019)"
    ],
    rating: 4.8,
    reviewCount: 95,
    location: "456 Health Plaza",
    phone: "+1 (555) 234-5678",
    email: "michael.chen@mediclinic.com"
  },
  {
    id: "3",
    name: "Dr. Emily Martinez",
    specialty: "Pediatrician",
    image: "/team-member-3.jpg",
    bio: "Dr. Emily Martinez is a compassionate pediatrician dedicated to providing comprehensive care for children of all ages.",
    education: [
      "MD from Yale University",
      "Pediatrics Residency at Children's Medical Center"
    ],
    experience: [
      "Lead Pediatrician at Family Care Clinic (2017-present)",
      "Pediatric Specialist at Children's Medical Center (2012-2017)"
    ],
    rating: 4.9,
    reviewCount: 156,
    location: "789 Wellness Way",
    phone: "+1 (555) 345-6789",
    email: "emily.martinez@mediclinic.com"
  }
];
