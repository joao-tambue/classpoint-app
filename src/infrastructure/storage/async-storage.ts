import AsyncStorage from "@react-native-async-storage/async-storage";

export async function setItem(key: string, value: string): Promise<void> {
  return AsyncStorage.setItem(key, value);
}

export async function getItem(key: string): Promise<string | null> {
  return AsyncStorage.getItem(key);
}

export async function removeItem(key: string): Promise<void> {
  return AsyncStorage.removeItem(key);
}

export async function setJSON<T>(key: string, value: T): Promise<void> {
  return AsyncStorage.setItem(key, JSON.stringify(value));
}

export async function getJSON<T>(key: string): Promise<T | null> {
  const raw = await AsyncStorage.getItem(key);
  return raw ? JSON.parse(raw) : null;
}

export async function clearAll(): Promise<void> {
  return AsyncStorage.clear();
}
