import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div``;
const NewsBox = styled.ul``;
const ItemBox = styled.li``;

const Test5 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url =
      'https://newsapi.org/v2/top-headlines?country=kr&apiKey=660048f8aa984e13a9e9548a62e8d3f5';
    axios.get(url).then((res) => setData(res.data.articles));
  }, []);

  return (
    <Container>
      <NewsBox>
        {data.map((item, index) => (
          <ItemBox key={index}>
            <a href={item.url} target="_blank">
              <h3>{item.title}</h3>
              <img src={item.urlToImage} alt={item.title} />
              <p>{item.description}</p>
            </a>
          </ItemBox>
        ))}
      </NewsBox>
    </Container>
  );
};

export default Test5;
