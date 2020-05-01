import * as React from "react";
import { Text } from "react-native";

export default function (props) {
  return <Text {...props} style={[props.style, { fontFamily: "bold-font" }]} />;
}
