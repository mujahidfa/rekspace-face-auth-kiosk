import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import EventCard from "./EventCard";

export default function Home({ navigation }) {
  const [value, setValue] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          fontSize: 35,
          fontWeight: "700",
          color: "#2E235D",
          marginBottom: 20,
        }}
      >
        Room schedule
      </Text>

      <TextInput
        style={{
          width: 370,
          borderRadius: 10,
          padding: 20,
          marginBottom: 20,
          backgroundColor: "#F9F9FD",
        }}
        placeholder="Search"
        placeholderTextColor="#ACA5CA"
        onChangeText={(text) => setValue(text)}
        value={value}
      />

      <ScrollView>
        {meetings.map((meeting, index) => (
          <EventCard
            title={meeting.title}
            date={meeting.date}
            time={meeting.time}
            name={meeting.name}
            key={index}
            onPress={() => navigation.navigate("FaceScan")}
            backgroundColor={meeting.backgroundColor}
            titleColor={meeting.titleColor}
            subtitleColor={meeting.subtitleColor}
          />
        ))}

        {/* <Pressable
          onPress={() => navigation.navigate("FaceScan")}
          style={{
            padding: 20,
            backgroundColor: "blue",
          }}
        >
          <Text>Unlock room</Text>
        </Pressable> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const meetings = [
  {
    title: "Design meeting",
    date: "22 June 2020",
    time: "10:00 - 11:30am",
    name: "Khairul Nazran",
    backgroundColor: "#EBF4FF",
    titleColor: "#667EEA",
    subtitleColor: "#A3BFFA",
  },
  {
    title: "Development meeting",
    date: "22 June 2020",
    time: "11:30 - 1:30pm",
    name: "Mujahid Anuar",
    backgroundColor: "#D9F2F1",
    titleColor: "#3A8584",
    subtitleColor: "#769E9E",
  },
  {
    title: "Product meeting",
    date: "22 June 2020",
    time: "2:00 - 3:30pm",
    name: "Fahim Aqil",
    backgroundColor: "#D9F2F1",
    titleColor: "#3A8584",
    subtitleColor: "#769E9E",
  },
  {
    title: "Managerial meeting",
    date: "22 June 2020",
    time: "4:00 - 5:30pm",
    name: "Izqalan",
    backgroundColor: "#D9F2F1",
    titleColor: "#3A8584",
    subtitleColor: "#769E9E",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
});
