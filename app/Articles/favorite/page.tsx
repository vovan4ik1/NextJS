'use client'

import { useEffect, useState } from 'react';
import FavoriteArticle from '../../../components/FavoriteArticle';

interface Article {
  id: number;
  title: string;
  body: string;
}

const FavoriteArticles = () => {
  const [favoriteArticles, setFavoriteArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ids = [1, 2, 3];
    Promise.all(ids.map(id => fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json())))
      .then((data: Article[]) => {
        setFavoriteArticles(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading favorite articles...</div>;
  }

  return (
    <div>
      <h1>Favorite Articles</h1>
      {favoriteArticles.map((article) => (
        <FavoriteArticle key={article.id} article={article} />
      ))}
    </div>
  );
};

export default FavoriteArticles;