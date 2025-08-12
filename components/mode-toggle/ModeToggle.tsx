'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = resolvedTheme === 'dark'

  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all ${
          isDark ? 'scale-0 -rotate-90 absolute' : 'scale-100 rotate-0'
        }`}
      />
      <Moon
        className={`h-[1.2rem] w-[1.2rem] transition-all ${
          isDark ? 'scale-100 rotate-0' : 'scale-0 rotate-90 absolute'
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
