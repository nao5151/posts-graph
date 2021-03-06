import React, { Component } from 'react'
import PostsGraph from '../../src/index';
import { Item } from 'rss-parser';
import './App.scss'

const rss = require('./rss.xml')

interface AppState {
  posts: Item[]
}

export default class App extends Component {
  state: AppState = {
    posts: [],
  }

  render() {
    const { posts } = this.state

    return (
      <div className="app">
        <PostsGraph
          rss={rss}
          header={true}
          prev={<span>前</span>}
          next={<span>次</span>}
          changeFocus={(focusPosts: Item[]) => this.setState({posts: focusPosts})}
        />
        {posts.length > 0 && (
          <ul className="focus-posts">
            <li className="focus-posts__label">{`${posts[0].year}年${posts[0].month + 1}月${posts[0].week + 1}週 ${posts.length}記事`}</li>
            {posts.map((post: Item) => (
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
        )}
    </div>
    )
  }
}