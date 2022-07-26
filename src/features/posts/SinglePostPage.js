import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PostAuthor } from './PostAuthor';
import { selectPostById } from './postSlice';
import { ReactionButtons } from './ReactionButtons';

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params;

  const post = useSelector((state) => selectPostById(state, postId));

  if (!post) {
    return (
      <section>
        <h2>页面未找到！</h2>
      </section>
    );
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <PostAuthor userId={post.user}></PostAuthor>
        <p className="post-content">{post.content}</p>
      </article>
      <ReactionButtons post={post}></ReactionButtons>
      <Link to={`/editPost/${post.id}`} className="button">
        Edit Post
      </Link>
    </section>
  );
};
