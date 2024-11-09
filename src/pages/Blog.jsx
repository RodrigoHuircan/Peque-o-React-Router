import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { Link, useSearchParams } from "react-router-dom";

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  //! Sólo con fines de ejemplo
  // useEffect(() => {
  //   setSearchParams({ filter: "Rodrigo" });
  // }, [searchParams]);

  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleChange = (e) => {
    let filter = e.target.value;

    setSearchParams({ filter });
    // console.log("change");
  };

  return (
    <>
      <h1>Blog</h1>
      <input
        type="text"
        name=""
        onChange={handleChange}
        value={searchParams.get("filter") || ""}
        className="form-control my-3"
      />
      <ul className="list-group">
        {data
          .filter((user) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = user.title.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })

          .map((user) => (
            <Link
              to={`/blog/${user.id}`}
              key={user.id}
              className="list-group-item"
            >
              {user.id} - {user.title}
            </Link>
          ))}
      </ul>
    </>
  );
};

export default Blog;
