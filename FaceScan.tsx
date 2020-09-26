import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as FaceDetector from "expo-face-detector";
import { Camera } from "expo-camera";
import { MaterialIcons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import AnimatedLoader from "react-native-animated-loader";

const key = "5a55d6683cb04672960348faf4455082";
const loc = "southeastasia.api.cognitive.microsoft.com"; // replace with the server nearest to you

const base_instance_options = {
  baseURL: `https://${loc}/face/v1.0`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "Ocp-Apim-Subscription-Key": key,
  },
};

export default function FaceScan({ navigation }) {
  const [hasPermission, setHasPermission] = useState<null | boolean>(null);
  const [type] = useState(Camera.Constants.Type.front);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Finish");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        type={type}
        // onFacesDetected={handleFacesDetected}
        faceDetectorSettings={{
          mode: FaceDetector.Constants.Mode.fast,
          detectLandmarks: FaceDetector.Constants.Landmarks.none,
          runClassifications: FaceDetector.Constants.Classifications.none,
          minDetectionInterval: 100,
          tracking: true,
        }}
      >
        {/* <AnimatedLoader
          style={{
            flex: 1,
            width: 300,
            height: 300,
          }}
          source={require("./face-recognition.json")}
          speed={1}
          autoPlay={true}
          loop
          autoSize={true}
        /> */}

        <View
          style={{
            flex: 1,
          }}
        >
          {/* <AnimatedLoader
            style={{
              flex: 1,
            }}
            visible={true}
            // overlayColor="black" //"rgba(255,255,255,0.75)"
            source={require("./facescan.json")}
            // animationStyle={styles.lottie}
            // speed={1}
            // autoplay
            loop={false}
          /> */}
          <LottieView
            style={{
              flex: 20,
              // width: 8000,
              // height: 800,
            }}
            source={require("./facescan.json")}
            speed={1}
            autoPlay={true}
            loop={true}
            // autoSize={true}
          />
          <TouchableOpacity
            style={{
              flex: 1,
              alignSelf: "center",
              justifyContent: "flex-end",
              marginBottom: 50,
            }}
            onPress={() => navigation.navigate("Finish")}
          >
            <MaterialIcons name="camera" size={60} color="white" />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
