import React, { useState, useEffect } from "react";

interface Item {
  id: number;
  title: string;
  body: string;
}

const FetchDemo: React.FC = () => {
  const [item, setItem] = useState<Item | null>();
  const [id, setId] = useState(1);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/"+id)
      .then((response) => response.json())
      .then((data) => setItem(data));
  }, [id]);

  return (
    <div className="item">
      Id: <input type="text" value={id} onChange={(e) => setId(parseInt(e.target.value))} />
      <br/>
      <button onClick={() => setId(id - 1)}>Prev</button>
      <button onClick={() => setId(id + 1)}>Next</button>
      <div className="item-content">
        {!item?.id && <p>Item not found</p>}
        {item &&
          <>
            <h3>{item?.title}</h3>
            <p>{item?.body}</p>
          </>
        }
      </div>
    </div>
  );
};

export default FetchDemo;
