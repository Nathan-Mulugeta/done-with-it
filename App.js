import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            backgroundColor: "dodgerblue",
            width: 100,
            height: 100,
          }}
        />
        <View
          style={{
            backgroundColor: "gold",
            width: 100,
            height: 100,
          }}
        />
        <View
          style={{
            backgroundColor: "tomato",
            width: 100,
            height: 100,
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
