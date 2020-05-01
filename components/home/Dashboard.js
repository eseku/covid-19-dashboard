import React from "react";
import { View, StyleSheet } from "react-native";
import { Bold, Light } from "../fonts";
import numeral from "numeral";
import moment from "moment";

const Dashboard = ({ confirmed, recovered, deaths, updated }) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={{ flex: 4, borderWidth: 0, marginBottom: 5 }}>
          <View
            style={{
              flex: 2,
              borderWidth: 0,
              justifyContent: "center",
            }}
          >
            <Bold style={{ fontSize: 23 }}>Quick stats</Bold>
          </View>
          <View
            style={{
              flex: 1,
              borderWidth: 0,
              justifyContent: "center",
            }}
          >
            <Light style={{ fontSize: 13, color: "#b3b3b3" }}>
              Last Updated {moment(updated).fromNow()}
            </Light>
          </View>
        </View>
        <View style={{ flex: 2, borderWidth: 0, alignItems: "center" }}>
          <Light style={{ color: "#FFAE4F" }}>Details ></Light>
        </View>
      </View>

      <View style={styles.bottom}>
        <View style={[styles.child, styles.child1]}>
          <Bold style={{ fontSize: 30, color: "#FEC58D" }}>
            {confirmed && numeral(confirmed).format("0,0")}
          </Bold>
          <Light style={{ fontSize: 13, color: "#FEC58D" }}>Confirmed</Light>
        </View>
        <View style={[styles.child, styles.child2]}>
          <Bold style={{ fontSize: 30, color: "#0FAE78" }}>
            {recovered && numeral(recovered).format("0,0")}
          </Bold>
          <Light style={{ fontSize: 13, color: "#0FAE78" }}>Recovered</Light>
        </View>
        <View style={[styles.child, styles.child3]}>
          <Bold style={{ fontSize: 30, color: "#DA3A59" }}>
            {deaths && numeral(deaths).format("0,0")}
          </Bold>
          <Light style={{ fontSize: 13, color: "#DA3A59" }}>Dead</Light>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#fff",
    height: 200,
    position: "absolute",
    top: 230,
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 30,
    // zIndex: 999,
  },
  top: {
    flex: 3,
    borderWidth: 0,
    flexDirection: "row",
    marginBottom: 20,
  },
  bottom: {
    flex: 5,
    borderWidth: 0,
    flexDirection: "row",
  },
  child: {
    flexGrow: 1,
  },
  child1: {
    borderRightWidth: 1,
    borderColor: "#E7E7E7",
    justifyContent: "center",
    alignItems: "center",
  },
  child2: {
    borderRightWidth: 1,
    borderColor: "#E7E7E7",
    justifyContent: "center",
    alignItems: "center",
  },
  child3: {
    // borderWidth: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Dashboard;
