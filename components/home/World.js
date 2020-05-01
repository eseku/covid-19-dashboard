import React, { useState, Fragment } from "react";
import { ScrollView, ActivityIndicator, View } from "react-native";
import Country from "./Country";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Bold } from "../fonts";
const query = gql`
  {
    countries(sortBy: cases) {
      country
      countryInfo {
        iso2
        iso3
      }
      result {
        cases
        updated
        todayCases
      }
    }
  }
`;

const World = () => {
  const [countries, setCountries] = useState([]);
  return (
    <Fragment>
      <Query query={query}>
        {({ loading, error, data }) => {
          if (loading)
            return (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ActivityIndicator
                  size="large"
                  animating={true}
                  color="#11A472"
                />
                <Bold
                  style={{ color: "grey", fontSize: 20, marginVertical: 10 }}
                >
                  Retrieving data, kindly wait
                </Bold>
              </View>
            );

          if (error)
            return (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Bold
                  style={{
                    color: "grey",
                    fontSize: 20,
                    color: "DA3A59",
                    marginVertical: 10,
                  }}
                >
                  Error, check your network connection
                </Bold>
              </View>
            );

          return (
            <ScrollView
              style={{
                flex: 1,
                backgroundColor: "transparent",
                paddingVertical: 20,
              }}
              contentContainerStyle={{}}
              horizontal={true}
              alwaysBounceHorizontal={true}
              showsHorizontalScrollIndicator={false}
              decelerationRate="fast"
            >
              {data.countries.map((country, index) => {
                return <Country key={index} {...country} />;
              })}
            </ScrollView>
          );
        }}
      </Query>
    </Fragment>
  );
};

export default World;
