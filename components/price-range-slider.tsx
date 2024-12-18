'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

interface PriceRangeSliderProps {
  min: number
  max: number
  value: [number, number]
  onValueChange: (value: [number, number]) => void
}

export function PriceRangeSlider({ min, max, value, onValueChange }: PriceRangeSliderProps) {
  return (
    <SliderPrimitive.Root
      className="relative flex w-full touch-none select-none items-center"
      value={value}
      max={max}
      min={min}
      step={1}
      onValueChange={onValueChange}
    >
      <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
        <SliderPrimitive.Range className="absolute h-full bg-[#40C7B9] dark:bg-[#5FE3D3]" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className="block h-5 w-5 rounded-full border-2 border-[#40C7B9] dark:border-[#5FE3D3] bg-white dark:bg-gray-800 ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#40C7B9] dark:focus-visible:ring-[#5FE3D3] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      />
      <SliderPrimitive.Thumb
        className="block h-5 w-5 rounded-full border-2 border-[#40C7B9] dark:border-[#5FE3D3] bg-white dark:bg-gray-800 ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#40C7B9] dark:focus-visible:ring-[#5FE3D3] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      />
    </SliderPrimitive.Root>
  )
}

