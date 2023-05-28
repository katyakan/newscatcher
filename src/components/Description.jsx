import React from 'react';
import { useParams } from 'react-router-dom';

const Description = ({ article, onBackClick }) => {
  const { id } = useParams();

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{article.name}</h2>
      <p>Автор: {article.provider && article.provider[0]?.name}</p>
      <p>Язык: {article.language}</p>
      <p>
        Дата публикации: {new Date(article.datePublished).toLocaleDateString()}
      </p>
      <p>Рейтинг: {article.rating ? article.rating.toFixed(2) : 'N/A'}</p>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        источник
      </a>
      <button onClick={onBackClick}>Назад</button>
    </div>
  );
};

export default Description;
