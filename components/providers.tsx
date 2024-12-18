'use client'

import { DarkModeProvider } from '@/contexts/dark-mode-context'
import { WishlistProvider } from './wishlist-context' 
import { Preloader } from '@/components/preloader'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <DarkModeProvider>
      <WishlistProvider>
        <Preloader />
        {children}
      </WishlistProvider>
    </DarkModeProvider>
  )
}

