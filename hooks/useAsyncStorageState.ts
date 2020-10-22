import React from "react";
import AsyncStorage from "@react-native-community/async-storage";

export default function useAsyncStorageState(
  key: string,
  defaultValue: string | (() => any) = "",
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) {
  const [state, setState] = React.useState<any>(null);
  const prevKeyRef = React.useRef(key);

  React.useEffect(() => {
    async function setUp() {
      const valueInLocalStorage = await AsyncStorage.getItem(key);

      if (valueInLocalStorage) {
        const valueDeserialized = deserialize(valueInLocalStorage);
        console.log({ valueDeserialized });
        setState(valueDeserialized);
      } else if (typeof defaultValue === "function") {
        setState(defaultValue());
      } else {
        setState(defaultValue);
      }
    }

    setUp();
  }, []);

  React.useEffect(() => {
    const prevKey = prevKeyRef.current;

    if (prevKey !== key) {
      AsyncStorage.removeItem(prevKey);
    }

    prevKeyRef.current = key;
    AsyncStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);

  return [state, setState];
}
