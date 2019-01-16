import React, { Component } from 'react';
import Parser, { Items } from 'rss-parser'
import Header from './Header'
import Graph from './Graph'
import FocusPosts from './FocusPosts'
import getDate from './utils/getDate'
import './App.scss'

export interface Posts {
  [key: string]: Items[]
}

interface AppState {
  vertical: boolean,
  year: number,
  minYear: number,
  maxYear: number,
  posts: Posts | null,
  focus: string
}

const today = new Date()
const locale = 'ja-JP'
const dateStringOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}

class App extends Component<{}, AppState> {
  state = {
    vertical: false,
    year: today.getFullYear(),
    minYear: today.getFullYear(),
    maxYear: today.getFullYear(),
    posts: null,
    focus: '',
  }

  componentDidMount() {
    (async () => {
      const parser = new Parser()
      const feed = await parser.parseURL('/rss.xml')
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

  render() {
    const { vertical, year, minYear, maxYear, posts, focus } = this.state

    return (
      <div className="app">
        <button onClick={() => this.setState({vertical: !vertical})}>change view</button>
        <Header
          year={year}
          maxYear={maxYear}
          minYear={minYear}
          prevClick={() => this.setState({year: year - 1})}
          nextClick={() => this.setState({year: year + 1})}
        />
        <Graph
          vertical={vertical}
          year={year}
          posts={posts}
          onFocus={(key) => this.setState({focus: key})}
        />
        <FocusPosts
          posts={focus && posts ? posts[focus] : []}
        />
      </div>
    )
  }
}

export default App;
