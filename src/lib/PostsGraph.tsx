import React, { Component } from 'react';
import Parser, { Items } from 'rss-parser'
import Header from './Header'
import Graph from './Graph'
import getDate from './utils/getDate'

export type Posts = Items[]

export interface PostsObject {
  [key: string]: Posts
}

const today = new Date()
const locale = 'ja-JP'
const dateStringOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}

interface PostsGraphProps {
  rss: string
  header?: boolean
  vertical?: boolean
  changeFocus?: (focusPosts: Posts) => void
}

interface PostsGraphState {
  year: number,
  minYear: number,
  maxYear: number,
  posts: PostsObject,
  focusKey: string
}

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
      const parser = new Parser()
      const feed = await parser.parseURL(this.props.rss)
      if (feed.items) {
        const years: number[] = []
        const posts = feed.items.reduceRight((acm, item) => {
          const { year, month, week } = getDate(item.pubDate as string)
          years.push(year)

          item.year = year
          item.month = month
          item.week = week
          item.pubDate = new Date(item.pubDate as string).toLocaleDateString(locale, dateStringOptions)
          
          const key = `${year}-${month}-${week}`
          if (!acm[key]) {
            acm[key] = []
          }
          acm[key].push(item)

          return acm
        }, {})

        this.setState({
          minYear: Math.min(...years),
          posts,
        })
      }
    })()
  }

  componentDidUpdate(prevProps: PostsGraphProps, prevState: PostsGraphState) {
    const { changeFocus } = this.props
    const { focusKey, posts } = this.state
    if (focusKey === prevState.focusKey) return

    const focusPosts: Items[] = (posts as PostsObject)[focusKey] ?
      (posts as PostsObject)[focusKey] : []
    if (typeof changeFocus === 'function') {
      changeFocus(focusPosts)
    }
  }

  render() {
    const { header, vertical } = this.props
    const { year, minYear, maxYear, posts } = this.state

    return (
      <div className="posts-graph">
        {header && (
          <Header
            year={year}
            maxYear={maxYear}
            minYear={minYear}
            prevClick={() => this.setState({year: year - 1, focusKey: ''})}
            nextClick={() => this.setState({year: year + 1, focusKey: ''})}
          />
        )}
        <Graph
          vertical={vertical}
          year={year}
          posts={posts}
          onFocus={(key) => this.setState({focusKey: key})}
        />
      </div>
    )
  }
}