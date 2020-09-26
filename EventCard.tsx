import React from "react";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function EventCard({
  title,
  date,
  time,
  name,
  onPress,
  backgroundColor,
  titleColor,
  subtitleColor,
}) {
  return (
    <View
      style={{
        flex: 1,
        width: 370,
        backgroundColor: backgroundColor,
        marginBottom: 20,
        borderRadius: 15,
        padding: 20,
      }}
    >
      <View
        style={{
          // flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 8,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "700", color: titleColor }}>
          {title}
        </Text>
        <Text style={{ fontWeight: "700", color: subtitleColor }}>{date}</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 3,
        }}
      >
        <MaterialCommunityIcons name="clock" size={20} color={subtitleColor} />
        <Text
          style={{ fontWeight: "700", color: subtitleColor, marginLeft: 7 }}
        >
          {time}
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <MaterialIcons name="person" size={20} color={subtitleColor} />
        <Text
          style={{ fontWeight: "700", color: subtitleColor, marginLeft: 7 }}
        >
          {name}
        </Text>
      </View>

      {/* <Pressable
        style={{
          backgroundColor: subtitleColor,
          alignItems: "center",
          paddingVertical: 10,
          borderRadius: 15,
        }}
      >
        <Text>Get into room</Text>
      </Pressable> */}
      <TouchableOpacity
        style={{
          backgroundColor: subtitleColor,
          alignItems: "center",
          paddingVertical: 10,
          borderRadius: 15,
        }}
        onPress={onPress}
      >
        <Text style={{ fontWeight: "700", color: "white" }}>Get into room</Text>
      </TouchableOpacity>
    </View>
  );
}
