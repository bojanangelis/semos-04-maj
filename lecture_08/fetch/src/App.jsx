import { useEffect, useState } from 'react';
import './App.css';
import { Link, useNavigate } from 'react-router-dom';

function App() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleFetch = async () => {
      try {
        fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'GET',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .then((response) => response.json())
          .then((post) => setData(post));
      } catch (e) {
        console.log(e);
      }
    };

    handleFetch();
  }, []);

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    try {
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: title,
          body: body,
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((post) => setData([post, ...data]));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <form>
        <label>Create post</label>
        <br />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button onClick={(e) => handlePostSubmit(e)}>Submit</button>
      </form>

      {data?.map((post) => (
        <div
          style={{
            border: '1px solid gray',
            borderRadius: '5px',
            padding: 10,
            margin: 10,
          }}
          key={post.id}
        >
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          {/* <span>User ID: {post.userId}</span>
          <span>Post ID: {post.id}</span> */}

          <button onClick={() => navigate(`/post/${post?.id}`)}>
            Show more
          </button>
        </div>
        // <Link key={post?.id} to={`/post/${post?.id}`}>
        //   <h4>{post.title}</h4>
        //   <p>{post.body}</p>
        // </Link>
        // <a href={`/post/${post?.id}`}>
        //   <h4>{post.title}</h4>
        //   <p>{post.body}</p>
        // </a>
      ))}
    </>
  );
}

export default App;
