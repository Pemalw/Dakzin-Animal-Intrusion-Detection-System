import { Slot } from "expo-router";
import { Text, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as Notifications from "expo-notifications";

Notifications.requestPermissionsAsync().then(() => {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldSetBadge: false,
      shouldPlaySound: true,
    }),
  });
});

export default function layout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Slot />
    </SafeAreaView>
  );
}
