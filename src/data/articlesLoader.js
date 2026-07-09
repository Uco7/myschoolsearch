// Automatically loads every JSON file the generator pipeline drops into
// src/data/articles/ — no manual import list to maintain as new articles
// get generated. (manifest.json itself gets picked up too but is filtered
// out below since it isn't an article.)
const modules = import.meta.glob("../data/articles/*.json", { eager: true });

const articles = Object.entries(modules)
  .filter(([path]) => !path.endsWith("manifest.json"))
  .map(([, mod]) => mod.default || mod);

export function getAllArticles() {
  return articles;
}

export function getArticleBySlug(slug) {
  return articles.find((a) => a.slug === slug);
}
