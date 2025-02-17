interface Article {
  id: number;
  title: string;
  body: string;
}

interface FavoriteArticleProps {
  article: Article;
}

const FavoriteArticle = ({ article }: FavoriteArticleProps) => {
  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.body}</p>
    </div>
  );
};

export default FavoriteArticle;