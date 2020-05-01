import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Modal as RNM,
  ActivityIndicator,
} from "react-native";
import { BlurView } from "expo-blur";
import { Bold, Light } from "../fonts";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const query = gql`
  {
    countries {
      country
      countryInfo {
        iso2
      }
    }
  }
`;

function cCodeToEmoji(cCode) {
  return cCode
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397));
}

const Selector = ({ country: selectedCountry, selectCountry }) => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Bold style={{ fontSize: 30, color: "black" }}>
          Public Covid19 Informant
        </Bold>
      </View>
      <TouchableOpacity
        style={styles.bottomView}
        onPress={() => {
          setShowModal(!showModal);
        }}
        activeOpacity={0.9}
      >
        <BlurView
          intensity={90}
          tint="dark"
          style={{
            flex: 1,
            flexDirection: "row",
            borderColor: "#fff",
            marginTop: "auto",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <View style={{ flex: 8, flexDirection: "row" }}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <EvilIcons name={"location"} size={30} color="#fff" />
            </View>
            <View style={{ flex: 4, paddingVertical: 0 }}>
              <Light style={{ color: "#fff", fontSize: 25 }}>
                {selectedCountry}
              </Light>
            </View>
          </View>
          <View
            style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
          >
            <AntDesign name={"down"} size={20} color="#fff" />
          </View>
        </BlurView>
      </TouchableOpacity>

      <Query query={query}>
        {({ data, loading, error }) => {
          if (loading)
            return (
              <RNM animationType="slide" transparent={true} visible={true}>
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <ActivityIndicator size="large" animating={true} />
                  </View>
                </View>
              </RNM>
            );
          if (error) return <Bold>error ...</Bold>;

          return (
            <Modal
              isVisible={showModal}
              onBackdropPress={() => setShowModal(!showModal)}
              onSwipeComplete={() => setShowModal(!showModal)}
              animationIn="zoomInUp"
              animationOut="zoomOutDown"
              animationInTiming={500}
              animationOutTiming={1000}
              style={{
                margin: 0,

                justifyContent: "flex-end",
              }}
            >
              <View
                style={{
                  marginTop: 50,
                  paddingHorizontal: 20,
                  backgroundColor: "#f4f6fa",
                  height: Dimensions.get("window").height / 1.3,
                  borderTopRightRadius: 25,
                  borderTopLeftRadius: 25,
                  paddingTop: 20,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Bold style={{ fontSize: 30 }}>Select Country </Bold>
                  <Bold style={{ fontSize: 30 }}>🌍 </Bold>
                </View>
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{
                    paddingVertical: 20,
                  }}
                >
                  {data.countries.map((country, index) => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          selectCountry(country.country);
                          setShowModal(!showModal);
                        }}
                        key={index}
                        style={{
                          paddingVertical: 20,
                          borderWidth:
                            country.country === selectedCountry ? 5 : 2,
                          borderColor: "#B2B2B2",
                          backgroundColor:
                            country.country === selectedCountry
                              ? "#222B45"
                              : "#f4f6fa",
                          marginBottom: 10,
                          borderRadius: 30,
                          paddingLeft:
                            country.country === selectedCountry ? 30 : 20,
                        }}
                      >
                        <Light
                          style={{
                            fontSize: 25,
                            color:
                              country.country === selectedCountry
                                ? "#f4f6fa"
                                : "#222b45",
                          }}
                        >
                          {country.country === selectedCountry
                            ? `${cCodeToEmoji(country.countryInfo.iso2)}    ${
                                country.country
                              }`
                            : country.country}
                        </Light>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              </View>
            </Modal>
          );
        }}
      </Query>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "black",
    justifyContent: "space-between",
  },
  topView: {
    flex: 4,
  },
  bottomView: {
    flex: 4,
    alignItems: "center",
    borderRadius: 15,
    borderColor: "#fff",
    marginTop: "auto",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Selector;
