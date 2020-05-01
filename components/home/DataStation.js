import React, { useState } from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import Dashboard from "./Dashboard";
import Selector from "./Selector";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Bold } from "../fonts";

const query = gql`
  query country($countryName: String!) {
    country(name: $countryName) {
      country
      result {
        cases
        recovered
        deaths
        updated
      }
    }
  }
`;

const image = {
  uri:
    "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v871-aum-21.jpg?w=800&dpr=1&fit=default&crop=default&auto=format&fm=pjpg&q=75&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=221863b1656d3ad76e5907c1bd824772",
};

const DataStation = () => {
  const [country, setCountry] = useState("Ghana");

  const changeCountry = (country) => {
    setCountry(country);
  };

  return (
    <Query query={query} variables={{ countryName: country }}>
      {({ data, loading, error }) => {
        if (loading)
          return (
            <View style={styles.topView}>
              <View style={{ flex: 6 }}>
                <ImageBackground
                  source={require("../../assets/images/cough.jpg")}
                  style={styles.imageBackground}
                >
                  <Selector country={"..."} />
                </ImageBackground>
              </View>
              <View style={{ flex: 4, backgroundColor: "#EDEDED" }}></View>
              <Dashboard confirmed={"..."} recovered={"..."} deaths={"..."} />
            </View>
          );
        if (error) return <Bold>error</Bold>;

        return (
          <View style={styles.topView}>
            <View style={{ flex: 6 }}>
              <ImageBackground
                source={require("../../assets/images/cough.jpg")}
                style={styles.imageBackground}
              >
                <Selector
                  country={data.country.country}
                  selectCountry={changeCountry}
                />
              </ImageBackground>
            </View>
            <View style={{ flex: 4, backgroundColor: "#EDEDED" }}></View>
            <Dashboard
              confirmed={data.country.result.cases}
              recovered={data.country.result.recovered}
              deaths={data.country.result.deaths}
              updated={data.country.result.updated}
            />
          </View>
        );
      }}
    </Query>
  );
};

export default DataStation;

const styles = StyleSheet.create({
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
});
