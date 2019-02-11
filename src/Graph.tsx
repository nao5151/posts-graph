import React from 'react'
import GraphBlock from './GraphBlock'
import getWeeksInMonth from './utils/getWeeksInMonth'
import { Posts } from './utils/fetchAndParseFeed'

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
  year: number,
  posts: Posts,
  onFocus: (key: string) => void
}

const Graph: React.SFC<GraphProps> = (props) => {
  const { posts, year, onFocus } = props
  if (Object.keys(posts).length === 0) return null

  const size = 45;
  const fontSize = 14;
  const lineHeight = 1.5;

  return (
    <svg viewBox={`${-fontSize} ${-fontSize * lineHeight} ${size * 12 + fontSize} ${size * 5 + fontSize * lineHeight}`}>
      <g className='posts-graph__months' fontSize={fontSize} transform={`translate(${size / 2} 0)`} textAnchor="middle">
        {months.map((m, i) => (
          <text x={size * i} y={-fontSize / 2}>{m}</text>
        ))}
      </g>
      <g className='posts-graph__weeks' fontSize={fontSize} transform={`translate(0 ${size / 2 + fontSize / 2})`} textAnchor="middle">
        {weeks.map((w, i) => (
          <text x={-fontSize / 2} y={size * i}>{w}</text>
        ))}
      </g>
      <g className="posts-graph__posts">
        {months.map((_, m) => (
          <React.Fragment key={m}>
            {(() => {
              const commonProps = {
                month: m,
                size,
              }
              const keys = createKeys(year, m)
              return [
                <GraphBlock key={keys[0]} {...commonProps} week={0} count={getCount(posts, keys[0])} onFocus={() => {onFocus(keys[0])}} />,
                <GraphBlock key={keys[1]} {...commonProps} week={1} count={getCount(posts, keys[1])} onFocus={() => {onFocus(keys[1])}} />,
                <GraphBlock key={keys[2]} {...commonProps} week={2} count={getCount(posts, keys[2])} onFocus={() => {onFocus(keys[2])}} />,
                <GraphBlock key={keys[3]} {...commonProps} week={3} count={getCount(posts, keys[3])} onFocus={() => {onFocus(keys[3])}} />,
                <GraphBlock key={keys[4]} {...commonProps} week={4}
                  count={getWeeksInMonth(year, m) === 5 ? getCount(posts, keys[4]) : false}
                  onFocus={() => {onFocus(keys[4])}}
                />
              ]
            })()}
          </React.Fragment>
        ))}
      </g>
    </svg>
  );
}

export default Graph