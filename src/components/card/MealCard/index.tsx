import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import Meal from "../../../../models/meal";
import { mealsStyle } from "./styles";

interface MealCardProps {
  mealData: Meal;
  categoryColor: string;
}

export default function MealCard({ mealData, categoryColor }: MealCardProps) {
  const styles = mealsStyle(categoryColor);

  return (
    <Pressable>
      <View style={styles.mealCardContainer}>
        <Image source={{ uri: mealData.imageUrl }} style={styles.mealImage} />
        <Text style={[styles.mealText]}>{mealData.title}</Text>
        <View style={styles.tagContainer}>
          <Text style={styles.tagText}>{mealData.complexity}</Text>
          <Text style={styles.tagText}>{mealData.duration} minutes</Text>
        </View>
      </View>
    </Pressable>
  );
}
