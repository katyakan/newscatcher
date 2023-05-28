import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [articles, setArticles] = useState([]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const url = `https://bing-news-search1.p.rapidapi.com/news/search?q=${encodeURIComponent(
      searchQuery
    )}&count=15&freshness=Day&originalImg=true&textFormat=Raw&safeSearch=Off`;
    const options = {
      method: 'GET',
      headers: {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': 'cd09df84f1msha956529850dfc76p1a77d3jsn59251381b36e',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);

      setArticles(data.value);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Поиск новостей</h1>

      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={searchQuery}
          placeholder="Введите поисковый запрос"
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <button type="submit">Искать</button>
      </form>

      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <h3>{article.name}</h3>
            {article.image && (
              <img
                src={article.image.thumbnail.contentUrl}
                alt={article.name}
              />
            )}
            <p>{article.description}</p>
            <p>Автор: {article.provider[0].name}</p>
            <p>Язык: {article.language}</p>
            <p>
              Дата публикации:{' '}
              {new Date(article.datePublished).toLocaleDateString()}
            </p>
            <p>Рейтинг: {article.rating ? article.rating.toFixed(2) : 'N/A'}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              источник
            </a>
            <Link to={`/description/${article.id}`}>{article.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
