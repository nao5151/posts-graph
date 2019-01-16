import React from 'react'
import './GraphBlock.scss'

interface GraphBlockProps {
  year: number
  month: number
  week: number
  count: number
  onFocus?: (key: string) => void
}

const GraphBlock: React.SFC<GraphBlockProps> = ({year, month, week, count, onFocus}) => (
  <div
    className={`graph-block graph-block--${count >= 4 ? 4 : count}`}
    title={`${year}年${month + 1}月${week + 1}週目${count}記事`}
    tabIndex={count > 0 ? 0 : -1}
    onFocus={() => {
      if (typeof onFocus === 'function') {
        onFocus(`${year}-${month}-${week}`)
      }
    }}
  >
    <span className="graph-block__label">{`${year}年${month + 1}月${week + 1}週目${count}記事`}</span>
  </div>
)

export default GraphBlock