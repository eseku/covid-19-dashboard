import React from "react";
import { View, ImageBackground } from "react-native";
import numeral from "numeral";
import { Bold } from "../fonts";

// const image = {
//   uri:
//     "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v875batch2-katie-20_1.jpg?w=1000&dpr=1&fit=default&crop=default&auto=format&fm=pjpg&q=75&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=88f59e029e9d700e3479cb5d02a2af87",
// };

// const image = {
//   uri:
//     "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm208-227a-ae-02b_1.jpg?w=1400&dpr=1&fit=default&crop=default&auto=format&fm=pjpg&q=75&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=a23e763f7c1487b8c9586266c45957e9",
// };

const image = {
  uri:
    "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm208-techi-03_1.jpg?w=1400&dpr=1&fit=default&crop=default&auto=format&fm=pjpg&q=75&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=fd4473c8f76b468321d3c12ec7ef73a3",
};

const Country = (props) => {
  return (
    <View
      style={{
        width: 200,
        height: "100%",
        marginHorizontal: 25,
        borderRadius: 30,
        shadowColor: "grey",
        shadowOffset: {
          width: 30,
          height: 20,
        },
        shadowOpacity: 0.05,
      }}
    >
      <ImageBackground
        source={image}
        defaultSource={require("../../assets/images/country.jpg")}
        style={{ flex: 1, padding: 20, borderRadius: 10 }}
        imageStyle={{
          borderRadius: 25,
        }}
      >
        <View style={{ flex: 1 }}>
          <View
            style={{
              borderWidth: 0,
              flex: 2,
              marginBottom: 20,
            }}
          >
            <View style={{}}>
              <Bold style={{ fontSize: 60 }}>
                {props.countryInfo["iso2"] &&
                  cCodeToEmoji(props.countryInfo["iso2"])}
              </Bold>
            </View>
            <View style={{ marginBottom: 10 }}>
              <Bold style={{ fontSize: 25, color: "#222B45" }}>
                {props.country}
              </Bold>
            </View>
          </View>
          <View style={{ borderWidth: 0, flex: 2 }}>
            <View style={{}}>
              <Bold style={{ fontSize: 40, color: "#222B45" }}>
                {numeral(props.result.cases).format("0,0")}
              </Bold>
            </View>
            <View style={{}}>
              <Bold style={{ color: "#222B45" }}>Confirmed Cases</Bold>
            </View>
          </View>
          <View
            style={{
              flex: 2,
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <Bold style={{ color: "#555555", fontSize: 20 }}>
              {numeral(props.result.todayCases).format("+0,0")}
            </Bold>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

function cCodeToEmoji(cCode) {
  return cCode
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397));
}

export default Country;
