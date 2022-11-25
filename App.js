import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppNav } from "./src/navigation/appnav";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AppNav />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
