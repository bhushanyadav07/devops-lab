import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <h1>DevOps 3 Tier App</h1>
      {data.map((d,i)=>(<p key={i}>{d.text}</p>))}
    </div>
  );
}

export default App;