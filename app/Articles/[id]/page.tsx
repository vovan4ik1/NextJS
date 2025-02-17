interface Article {
  id: number;
  title: string;
  body: string;
}

interface Comment {
  id: number;
  name: string;
  body: string;
}

export default async function ArticleID({ params }: { params: { id: string } }) {
  const articleRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const commentsRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`);
  const article: Article = await articleRes.json();
  const comments: Comment[] = await commentsRes.json();

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.name}</strong>: {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
}


export async function generateStaticParams() {
  return Array.from({ length: 10 }, (_, i) => ({ id: String(i + 1) }));
}
