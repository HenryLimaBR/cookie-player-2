import React, { useState } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (err) {
      return initialValue
    }
  })

  const setValue: React.Dispatch<React.SetStateAction<T>> = (value) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value
    try {
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch(err) {
      setStoredValue(valueToStore)
    } finally {
      setStoredValue(valueToStore)
    }
  }

  return [storedValue, setValue]
}