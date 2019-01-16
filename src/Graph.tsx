import React from 'react'
import { Posts } from './App'
import GraphBlock from './GraphBlock'
import './Graph.scss'

interface GraphProps {
  vertical: boolean,
  year: number,
  posts: Posts | null,
  onFocus?: (key: string) => void
}

const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]

const weeks = [1, 2, 3, 4, 5]

const Graph: React.SFC<GraphProps> = (props) => {
  const { vertical, posts, year, onFocus } = props
  if (!posts) return null

  return (
    <div className={`graph ${vertical ? 'graph--vertical' : ''}`}>
      <div className="graph__months">
        {months.map(m => (
          <div key={m} className="graph__month">{m}</div>
        ))}
      </div>
      <div className="graph__weeks">
        {weeks.map(w => (
          <div key={w} className="graph__week">{w}</div>
        ))}
      </div>
      <div className="graph__posts">
        {months.map((_, m) => (
          <React.Fragment key={m}>
            {weeks.map((_, w) => {
              const key = `${year}-${m}-${w}`
              const currentPosts = (posts as Posts)[key]
              const props = {
                onFocus: onFocus,
                year,
                month: m,
                week: w,
                count: currentPosts ? currentPosts.length : 0
              }
              return (
                <GraphBlock key={key} {...props} />
              )
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Graph