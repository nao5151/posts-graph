import React from 'react'
import './FocusPosts.scss'
import { Items } from 'rss-parser'

interface FocusPostsProps {
  posts: Items[],
}

const FocusPosts: React.SFC<FocusPostsProps> = ({posts = []}) => {
  if (posts.length === 0) return null

  return (
    <ul className="focus-posts">
      <li className="focus-posts__label">{`${posts[0].year}年${posts[0].month + 1}月${posts[0].week + 1}週 ${posts.length}記事`}</li>
      {posts.map((post: Items) => (
        <li
          key={post.guid}
          className="focus-posts__item"
        >
          <h4 className="focus-posts__title">
            <a href={post.link} target="__blank">{post.title}</a>
          </h4>
          <p className="focus-posts__date"><small>{post.pubDate}</small></p>
        </li>
      ))}
    </ul>
  )
}

export default FocusPosts