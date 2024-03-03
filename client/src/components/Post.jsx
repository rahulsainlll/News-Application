import { Link } from "react-router-dom";

export default function Post({ _id, title, summary, content, cover }) {
  return (
    <div className="post">
      <Link to={`/news/${_id}`}>
        <div className="image">
          <img src={"http://localhost:8000/" + cover} />
        </div>
      </Link>

      <div className="texts">
        <Link to={`/news/${_id}`}>
          <h2>{title}</h2>
        </Link> 

        {/* <p className="summary">{summary}</p> */}
      </div>
    </div>
  );
}
