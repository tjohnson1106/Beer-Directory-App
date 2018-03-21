import React, { Component } from "react";
import { View, Text } from "react-native";
import { Container, Content } from "native-base";

import SearchHeader from "../../Search/SearchHeader";

class SearchTab extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    searchBeer: "",
    beerData: {}
  };

  beerSearch = () => {
    alert("Search for Beer");
  };

  render() {
    return (
      <Container>
        <SearchHeader
          value={this.state.searchBeer}
          onChangeText={searchBeer => this.setState({ searchBeer })}
          beerSearch={this.beerSearch}
        />
        <Content>{}</Content>
      </Container>
    );
  }
}

export default SearchTab;
