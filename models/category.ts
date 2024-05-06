class Category {
  id: string;
  title: string;
  colors: string[];
  emoji: string;

  constructor(id: string, title: string, colors: string[], emoji: string) {
    this.id = id;
    this.title = title;
    this.colors = colors;
    this.emoji = emoji;
  }
}

export default Category;
