import * as React from "react";
import { StyleSheet, View, ImageBackground, ScrollView } from "react-native";
import { Dashboard, Selector } from "~/components/home";
import { Bold } from "~/components/fonts";
import { LinearGradient } from "expo-linear-gradient";
import { World, DataStation } from "~/components/home";
import moment from "moment";

const image = {
  uri:
    "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v871-aum-21.jpg?w=800&dpr=1&fit=default&crop=default&auto=format&fm=pjpg&q=75&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=221863b1656d3ad76e5907c1bd824772",
};

export default function HomeScreen() {
  const [time, setTime] = React.useState(moment());

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <DataStation />
        <View style={styles.bottomView}>
          <LinearGradient
            colors={["#EDEDED", "white", "#fff"]}
            style={styles.gradient}
          >
            <View style={{ flex: 1, borderWidth: 0, paddingVertical: 20 }}>
              <View
                style={{
                  flex: 1,
                  paddingHorizontal: 25,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Bold style={{ fontSize: 20 }}>Covid19 World</Bold>
                <Bold style={{ fontSize: 15, color: "grey" }}>
                  {time.fromNow()}
                </Bold>
              </View>
              <View style={{ flex: 10, borderWidth: 0 }}>
                <World />
              </View>
            </View>
          </LinearGradient>
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageBackground: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 80,
    paddingBottom: 60,
    resizeMode: "cover",
  },
  topView: {
    flex: 5,
    backgroundColor: "papayawhip",
    position: "relative",
    borderWidth: 0,
  },
  gradient: {
    flex: 1,
  },
  bottomView: {
    flex: 5,
    borderWidth: 0,
    borderColor: "green",
  },
});
