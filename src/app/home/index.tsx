import { FlatList, ScrollView, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import CategoryCard from "@/components/card/CategoryCard";
import { CATEGORIES } from "../../../data/dummy-data";

export default function Home() {
  return (
    <View style={styles.homeContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Categories</Text>
      </View>
      <View style={styles.cardsContainer}>
        <FlatList
          contentContainerStyle={{ gap: 20 }}
          columnWrapperStyle={{ justifyContent: "space-evenly" }}
          data={CATEGORIES}
          renderItem={({ item }) => <CategoryCard categoryData={item} />}
          numColumns={2}
        />
      </View>
    </View>
  );
}
