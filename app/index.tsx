import { Stack } from "expo-router";
import { useEffect, useRef } from "react";
import { SearchBarCommands } from "react-native-screens";

export default function HomeScreen() {
  const ref = useRef<SearchBarCommands>(null);

  useEffect(() => {
    // > null
    console.log(ref.current);

    ref.current?.setText("hey");
  }, []);

  return (
    <>
      <Stack.Screen
        options={{
          title: "Hello world",
          headerShown: true,
          headerSearchBarOptions: {
            placeholder: "Search...",
            placement: "stacked",
            hideNavigationBar: false,
            autoFocus: true,
            hideWhenScrolling: false,
            autoCapitalize: "none",
            inputType: "text",
            ref,
          },
        }}
      />
    </>
  );
}
