import JokeCardContainer from "../components/JokeCardContainer";

const Ex8 = () =>{
  const jokes = '[{"id": "1", "setup": "What\'s the best thing about a Boolean?", "punchline": "Even if you\'re wrong, you\'re only off by a bit"},{"id": "2","setup": "Why do programmers wear glasses?","punchline": "Because they need to C#"},{"id": "3", "setup": "Oma hauska testi vitsi?", "punchline": "No ehkä yksi."}]'
    return (
      <div>
        <h3 className="">Ex8</h3>
        <div className="container">
          <JokeCardContainer data={jokes} />
        </div>
      </div>
    );
  }

  export default Ex8