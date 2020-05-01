import React, { createContext, useState, useEffect } from "react";
const AppContext = createContext({});
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "https://covid19-graphql.netlify.app/",
});

const Provider = (props) => {
  return (
    <ApolloProvider client={client}>
      {/* <AppContext.Provider value={{}}> */}
      {props.children}
      {/* </AppContext.Provider>; */}
    </ApolloProvider>
  );
};

export { Provider, AppContext };
