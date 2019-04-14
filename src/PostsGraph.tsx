import React, { Component, ReactChild } from 'react';
import { Item } from 'rss-parser'
import Header from './Header'
import Graph from './Graph'
import fetchAndParseFeed, { Posts } from './utils/fetchAndParseFeed';

interface PostsGraphProps {
  rss: string
  header?: boolean
  prev?: ReactChild
  next?: ReactChild
  changeFocus?: (focusPosts: Item[]) => void
}

interface PostsGraphState {
  year: number,
  minYear: number,
  maxYear: number,
  posts: Posts,
  focusKey: string
}

const today = new Date()

export default class PostsGraph extends Component<PostsGraphProps, PostsGraphState> {
  state = {
    year: today.getFullYear(),
    minYear: today.getFullYear(),
    maxYear: today.getFullYear(),
    posts: {},
    focusKey: '',
  }

  componentDidMount() {
    (async () => {
      const posts = await fetchAndParseFeed(this.props.rss)

      this.setState({
        minYear: Math.min(...(posts.years as number[])),
        posts,
      })
    })()
  }

  componentDidUpdate(prevProps: PostsGraphProps, prevState: PostsGraphState) {
    const { changeFocus } = this.props
    const { focusKey, posts } = this.state
    if (focusKey === prevState.focusKey) return

    const focusPosts = (posts as Posts)[focusKey] ?
      (posts as Posts)[focusKey] as Item[] : []
    if (typeof changeFocus === 'function') {
      changeFocus(focusPosts)
    }
  }

  render() {
    const { header, prev, next } = this.props
    const { year, minYear, maxYear, posts } = this.state

    return (
      <div className="posts-graph">
        {header && (
          <Header
            year={year}
            maxYear={maxYear}
            minYear={minYear}
            prev={prev}
            next={next}
            prevClick={() => this.setState({year: year - 1, focusKey: ''})}
            nextClick={() => this.setState({year: year + 1, focusKey: ''})}
          />
        )}
        <Graph
          year={year}
          posts={posts}
          onFocus={(key) => this.setState({focusKey: key})}
        />
      </div>
    )
  }
}