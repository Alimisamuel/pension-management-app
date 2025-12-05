import { useState, useEffect } from "react";

/**
 * Simple localStorage-backed state hook.
 * Falls back gracefully when window/localStorage are not available.
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") return initialValue;

    try {
      const stored = window.localStorage.getItem(key);
      return stored ? (JSON.parse(stored) as T) : initialValue;
    } catch (error) {
      console.error("Failed to read localStorage key", key, error);
      return initialValue;
    }
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Failed to write localStorage key", key, error);
    }
  }, [key, value]);

  return [value, setValue] as const;
}
