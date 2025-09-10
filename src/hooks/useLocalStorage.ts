export function saveToStorage<T>(key: string, value: T): void {
  if (typeof value === "string") {
    localStorage.setItem(key, value);
  } else {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

export function getFromStorage<T>(key: string): T | null {
  const value = localStorage.getItem(key);
  if (!value) return null;

  try {
    return JSON.parse(value) as T; // يحاول يحول string لـ object/array/number/boolean
  } catch {
    return value as unknown as T; // لو كانت string عادية
  }
}
