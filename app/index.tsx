import { Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>

      <TouchableOpacity onPress={() => router.push("/BaymaxScreen")}>
        <Text>Click</Text>
      </TouchableOpacity>
    </View>
  );
}
