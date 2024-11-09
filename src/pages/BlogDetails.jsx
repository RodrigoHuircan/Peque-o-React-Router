import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const BlogDetails = () => {
  const params = useParams();
  console.log(params);

  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <br />
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">{data.title}</h1>
          <p className="card-text">{data.body}</p>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
