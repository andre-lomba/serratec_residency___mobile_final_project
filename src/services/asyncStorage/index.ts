import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserProps } from "../api/apiMarvel";

export const storeData = async (key: string, user: UserProps) => {
  try {
    const jsonValue: string = JSON.stringify(user);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    throw error;
  }
};

export const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    throw error;
  }
};

export const getData = async (key: string): Promise<UserProps> => {
  try {
    const value: any = await AsyncStorage.getItem(key);
    const user: UserProps = JSON.parse(value);
    return user;
  } catch (error) {
    throw error;
  }
};
