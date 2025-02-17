import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

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

interface ArticleProps {
  article: Article;
  comments: Comment[];
}

const ArticleID = ({ article, comments }: ArticleProps) => {
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
};

export default ArticleID;

export async function getStaticPaths() {
  const paths = Array.from({ length: 10 }, (_, i) => ({
    params: { id: String(i + 1) }
  }));
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const articleRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const commentsRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`);
  const article: Article = await articleRes.json();
  const comments: Comment[] = await commentsRes.json();

  return {
    props: {
      article,
      comments
    }
  };
}
