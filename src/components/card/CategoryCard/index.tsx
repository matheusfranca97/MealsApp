import { View, Text, Pressable } from "react-native";
import React from "react";
import { categoryCardStyles } from "./styles";
import Category from "../../../../models/category";

interface CategoryCardProps {
  categoryData: Category;
}

export default function CategoryCard({ categoryData }: CategoryCardProps) {
  const styles = categoryCardStyles(categoryData.colors[0], categoryData.colors[1]);
  return (
    <Pressable
      style={styles.categoryCardContainer}
      onPress={() => console.log("Cliquei em " + categoryData.title)}
    >
      <View style={styles.emojiTextContainer}>
        <Text style={styles.emojiText}>{categoryData.emoji}</Text>
      </View>
      <View style={styles.titleTextContainer}>
        <Text style={styles.titleText}>{categoryData.title}</Text>
      </View>
    </Pressable>
  );
}
