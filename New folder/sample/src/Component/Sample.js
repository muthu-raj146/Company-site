import React, { useEffect, useState } from "react";
function Sample() {
  const [posts, setPost] = useState(null);
  useEffect(() => {
    fetch("https://course-api.com/react-tours-project")
      .then((data) => data.json())
      .then((data) => {
        setPost(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <h1>React App</h1>

      {posts ? (
        <>
          {posts.map((post) => {
            return (
              <div className="container">
                <div className="category">
                  <h4>Id:{post.id}</h4>
                  <img src={post.image} alt="imge" />
                  <p>Info:{post.info}</p>
                  <h5>Name:{post.name}</h5>
                  <h5>Price:{post.price}</h5>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <h3>loading..</h3>
      )}
    </>
  );
}

export default Sample;
