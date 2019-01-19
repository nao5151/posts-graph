import React from 'react'
import { Posts } from './App'
import GraphBlock from './GraphBlock'
import getWeeksInMonth from './utils/getWeeksInMonth'
import './Graph.scss'

const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]

const weeks = [1, 2, 3, 4, 5]

const createKeys = (year: number, month: number) => {
  return [
    `${year}-${month}-0`,
    `${year}-${month}-1`,
    `${year}-${month}-2`,
    `${year}-${month}-3`,
    `${year}-${month}-4`,
  ]
}

const getCount = (post: any, key: string) => {
  return post[key] ? post[key].length : 0
}

interface GraphProps {
  vertical: boolean,
  year: number,
  posts: Posts | null,
  onFocus: (key: string) => void
}

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
            {(() => {
              const props = {
                year,
                month: m,
              }
              const keys = createKeys(year, m)
              return [
                <GraphBlock key={keys[0]} {...props} week={0} count={getCount(posts, keys[0])} onFocus={() => {onFocus(keys[0])}} />,
                <GraphBlock key={keys[1]} {...props} week={1} count={getCount(posts, keys[1])} onFocus={() => {onFocus(keys[1])}} />,
                <GraphBlock key={keys[2]} {...props} week={2} count={getCount(posts, keys[2])} onFocus={() => {onFocus(keys[2])}} />,
                <GraphBlock key={keys[3]} {...props} week={3} count={getCount(posts, keys[3])} onFocus={() => {onFocus(keys[3])}} />,
                <GraphBlock key={keys[4]} {...props} week={4}
                  count={getWeeksInMonth(year, m) === 5 ? getCount(posts, keys[4]) : false}
                  onFocus={() => {onFocus(keys[4])}}
                />
              ]
            })()}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Graph