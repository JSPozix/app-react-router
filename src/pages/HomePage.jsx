import React from "react";
import Article from "../Components/Article.jsx";
const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun",
    author: "Jan Nowak",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor tellus aliquet orci consectetur, lacinia consequat magna hendrerit. Donec ornare dolor sit amet elit rhoncus imperdiet. Donec lacinia arcu quis elit luctus rhoncus. Duis at eros non lectus semper molestie. Mauris laoreet sapien eget orci volutpat tincidunt. Donec pretium tincidunt orci, non egestas felis consectetur ac. Donec in ipsum sodales, hendrerit diam sed, rhoncus ex. Maecenas fringilla a arcu scelerisque pretium. Ut elementum pellentesque ante ut posuere. Sed orci turpis, tristique vitae consequat vel, facilisis vel mauris. Nullam vehicula justo at sodales convallis.",
  },
  {
    id: 2,
    title: "Czym jest Paradoks Fermiego? ",
    author: "Jan Kowalski",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor tellus aliquet orci consectetur, lacinia consequat magna hendrerit. Donec ornare dolor sit amet elit rhoncus imperdiet. Donec lacinia arcu quis elit luctus rhoncus. Duis at eros non lectus semper molestie. Mauris laoreet sapien eget orci volutpat tincidunt. Donec pretium tincidunt orci, non egestas felis consectetur ac. Donec in ipsum sodales, hendrerit diam sed, rhoncus ex. Maecenas fringilla a arcu scelerisque pretium. Ut elementum pellentesque ante ut posuere. Sed orci turpis, tristique vitae consequat vel, facilisis vel mauris. Nullam vehicula justo at sodales convallis.",
  },
  {
    id: 3,
    title: "Ciemna materia i ciemna energia ?",
    author: "Jan Kwiatkowski",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor tellus aliquet orci consectetur, lacinia consequat magna hendrerit. Donec ornare dolor sit amet elit rhoncus imperdiet. Donec lacinia arcu quis elit luctus rhoncus. Duis at eros non lectus semper molestie. Mauris laoreet sapien eget orci volutpat tincidunt. Donec pretium tincidunt orci, non egestas felis consectetur ac. Donec in ipsum sodales, hendrerit diam sed, rhoncus ex. Maecenas fringilla a arcu scelerisque pretium. Ut elementum pellentesque ante ut posuere. Sed orci turpis, tristique vitae consequat vel, facilisis vel mauris. Nullam vehicula justo at sodales convallis.",
  },
];

const HomePage = () => {
  const artList = articles.map((article) => (
    <Article key={article.id} {...article} />
  ));
  return <div className="home">{artList}</div>;
};

export default HomePage;
