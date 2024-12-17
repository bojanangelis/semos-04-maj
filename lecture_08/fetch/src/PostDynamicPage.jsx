import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDynamicPage = () => {
  const [data, setData] = useState(null);
  const params = useParams();
  console.log(params?.id);

  useEffect(() => {
    const fetchDynamicPost = async () => {
      try {
        const data = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${params?.id}`,
          {
            method: 'GET',
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          }
        );
        const x = await data?.json();
        setData(x);
      } catch (e) {
        console.log(e);
      }
    };

    fetchDynamicPost();
  }, []);

  return (
    <div>
      <h2>{data?.title}</h2>
      <br />
      <p>{data?.body}</p>
    </div>
  );
};

export default PostDynamicPage;
