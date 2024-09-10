import { Stack, router } from "expo-router";

import { FAB } from "react-native-paper";
import { PostsProvider } from "@/contexts/PostsContext";
import { StyleSheet } from "react-native";

export default function LoginLyout() {
  const handledOnPressLogout = () => {
    router.replace("/(login)");
  };
  return (
    <PostsProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="list" />
        <Stack.Screen name="details" />
      </Stack>
      <FAB
        style={styles.fab}
        icon="logout"
        color="white"
        onPress={handledOnPressLogout}
      />
    </PostsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 32,
  },
  itemTitle: {
    marginVertical: 10,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 30,
    backgroundColor: "red",
  },
});
