import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LottieView from "lottie-react-native";
import AnimatedLoader from "react-native-animated-loader";

const turq = "#49BDB3";

export default function Finish({ navigation }) {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text
        style={{
          flex: 1,
          fontSize: 40,
          fontWeight: "600",
          color: turq,
          marginTop: 140,
        }}
      >
        Face authenticated!
      </Text>

      <LottieView
        style={{
          flex: 20,
          // width: 8000,
          // height: 800,
        }}
        source={require("./face-scanned.json")}
        speed={1}
        autoPlay={true}
        loop={false}
        // autoSize={true}
      />
      {/* <View
        style={{
          flex: 1,
          // width: 800,
          // height: 800,
        }}
      > */}
      {/* <AnimatedLoader
          visible={true}
          // overlayColor="rgba(255,255,255,0.75)"
          source={require("./face-scanned.json")}
          animationStyle={styles.lottie}
          speed={1}
          // autoplay={false}
          loop={false}
        /> */}
      {/* <LottieView
          source={require("./face-scanned.json")}
          speed={1}
          autoPlay={true}
          loop
          autoSize={true}
        />
      </View> */}

      <Text
        style={{ flex: 1, fontSize: 25, fontWeight: "500", marginTop: 200 }}
      >
        Room is now unlocked.
      </Text>
      <Text style={{ flex: 1, fontSize: 30, fontWeight: "500" }}>
        Welcome, <Text style={{ color: turq }}>Khairul Nazran!</Text>
      </Text>

      <TouchableOpacity
        style={{
          // flex: 1,
          alignSelf: "center",
          justifyContent: "flex-end",
          // marginBottom: 50,
        }}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={{ color: "white" }}>Go to home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  lottie: {
    width: 700,
    height: 700,
  },
});
