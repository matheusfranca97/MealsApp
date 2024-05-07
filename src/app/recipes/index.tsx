import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { recipesStyles } from "./styles";

import MealCard from "@/components/card/MealCard";

import { MEALS } from "../../../data/dummy-data";
import Meal from "../../../models/meal";
import Category from "../../../models/category";

interface RecipesProps {
  categoryData: Category;
}

export default function Recipes({ categoryData }: RecipesProps) {
  const styles = recipesStyles(categoryData.colors[0], categoryData.colors[1]);
  const [ammountOfRecipes, setAmmountOfRecipes] = useState(0);

  useEffect(() => {
    const myMeals = filterByCategory(MEALS, categoryData.id);
    setAmmountOfRecipes(myMeals.length);
  }, [categoryData.id]);

  function filterByCategory(meals: Meal[], category: string): Meal[] {
    return meals.filter((meal) => meal.categoryIds.includes(category));
  }

  const myMeals = filterByCategory(MEALS, categoryData.id);

  return (
    <View style={styles.recipesContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.ammountOfContainer}>
          <Text style={styles.ammountOfRecipesText}>{ammountOfRecipes} recipes</Text>
        </View>
        <View style={styles.titleEmojiRow}>
          <Text style={styles.titleText} numberOfLines={1} adjustsFontSizeToFit={true}>
            {categoryData.title}
          </Text>
          <Text style={styles.emojiText}>{categoryData.emoji}</Text>
        </View>
      </View>

      <Text style={styles.recipesText}>Popular Recipes</Text>
      <View style={styles.recipesList}>
        <FlatList
          data={myMeals}
          renderItem={(meal) => {
            return <MealCard mealData={meal.item} categoryColor={categoryData.colors[1]} />;
          }}
        ></FlatList>
      </View>
    </View>
  );
}
