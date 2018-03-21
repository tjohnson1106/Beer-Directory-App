import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TabNavigator } from "react-navigation";

import SearchTab from "../Search/TabNavigator/SearchTab";
import FavouritesTab from "../Search/TabNavigator/FavouritesTab";

SearchTabNavigator = TabNavigator({
  SearchTab: { screen: SearchTab },
  FavouritesTab: { screen: FavouritesTab }
});
