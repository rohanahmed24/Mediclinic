import { Product } from './types'

export const products: Product[] = [
  {
    id: '1',
    name: 'Diagnostic Otoscope',
    price: 34.99,
    originalPrice: 49.99,
    rating: 4,
    image: '/product1-300x300.jpg',
    category: 'Diagnostic',
    tags: ['Medical', 'Diagnostic', 'Tools'],
    onSale: true
  },
  {
    id: '2',
    name: 'Dental Jaw Model',
    price: 110.00,
    rating: 5,
    image: '/product2-300x300.jpg',
    category: 'Dental',
    tags: ['Dental', 'Education', 'Models']
  },
  {
    id: '3',
    name: 'Thermometer',
    price: 89.99,
    rating: 4,
    image: '/product3-300x300.jpg',
    category: 'Diagnostic',
    tags: ['Medical', 'Diagnostic', 'Temperature']
  },
  {
    id: '4',
    name: 'Surgical Scissors',
    price: 149.99,
    rating: 3,
    image: '/product4-300x300.jpg',
    category: 'Surgical',
    tags: ['Medical', 'Surgical', 'Tools']
  },
  {
    id: '5',
    name: 'Optical Microscope',
    price: 479.99,
    rating: 5,
    image: '/product5-300x300.jpg',
    category: 'Instruments',
    tags: ['Medical', 'Laboratory', 'Research']
  },
  {
    id: '6',
    name: 'Large Syringe',
    price: 59.99,
    rating: 4,
    image: '/product6-300x300.jpg',
    category: 'Instruments',
    tags: ['Medical', 'Injection', 'Tools']
  },
  {
    id: '7',
    name: 'Reflex Hammer',
    price: 69.99,
    rating: 4,
    image: '/product7-300x300.jpg',
    category: 'Diagnostic',
    tags: ['Medical', 'Diagnostic', 'Tools']
  },
  {
    id: '8',
    name: 'Surgical Kit',
    price: 199.99,
    rating: 4,
    image: '/product8-300x300.jpg',
    category: 'Surgical',
    tags: ['Medical', 'Surgical', 'Kit']
  },
  {
    id: '9',
    name: 'Electronic Monitor',
    price: 349.99,
    rating: 5,
    image: '/product9-300x300.jpg',
    category: 'Digital',
    tags: ['Medical', 'Electronic', 'Monitoring'],
    onSale: true
  }
]

export const categories = [
  { name: 'Diagnostic', count: 3 },
  { name: 'Digital', count: 1 },
  { name: 'Instruments', count: 2 },
  { name: 'Dental', count: 1 },
  { name: 'Surgical', count: 2 }
]

export const tags = [
  'Medical',
  'Diagnostic',
  'Tools',
  'Dental',
  'Education',
  'Models',
  'Temperature',
  'Surgical',
  'Laboratory',
  'Research',
  'Injection',
  'Kit',
  'Electronic',
  'Monitoring'
]

