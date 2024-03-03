import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { Link } from "react-router-dom";

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const { user } = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    const fetchPostInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/news/${id}`);
        setPostInfo(response.data);
        console.log(response.data._id);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPostInfo();
  }, []);

  if (!postInfo) return null;

  return (
    <div className="post-page">
      <div>
        <h1 className="mainHeader">{postInfo.title}</h1>
        {user && (
          <div className="edit-row">
            <Link className="edit-btn" to={`/edit/${postInfo._id}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              Edit this post
            </Link>
          </div>
        )}
        <div className="image">
          <img src={`http://localhost:8000/${postInfo.cover}`} alt="" />
        </div>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: postInfo.content }}
        />
      </div>

      <div className="trendingNews">
        <h2>Latest News 🔥</h2>
        <div>
          <img
            src={`http://localhost:8000/uploads/62abdaf3a77ec45ef10d84ade7ca69dc.jpg`}
            alt=""
          />
        </div>

        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: postInfo.title }}
        />

        <h2>Trending News</h2>
        <div>
          <img src={`http://localhost:8000/${postInfo.cover}`} alt="" />
        </div>

        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: postInfo.title }}
        />
        <h2>DON'T MISS</h2>
        <div>
          <img src={`http://localhost:8000/${postInfo.cover}`} alt="" />
        </div>

        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: postInfo.title }}
        />
      </div>
    </div>
  );
}
