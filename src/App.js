import React, { useEffect, useState } from "react";
import "./App.css";
import { fetchData, getRandomColor } from "./utils";
import { Button, Container, QuoteBox } from "./components";

const App = () => {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [color, setColor] = useState(null);

  const populateData = async () => {
    const result = await fetchData();
    const color = getRandomColor();
    setColor(color);
    setQuote(result.content);
    setAuthor(result.author);
  };
  useEffect(() => {
    populateData();
  }, []);
  return (
    <Container color={color}>
      <QuoteBox>
        <p id="quote">{quote}</p>
        <p id="author">{`- ${author || "Anonymous"}`}</p>
        <Button
          text="Generate Random Quote"
          color={color}
          onClick={populateData}
        />
      </QuoteBox>
    </Container>
  );
};

export default App;
