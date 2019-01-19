import React from 'react'
import './GraphBlock.scss'

interface NotExistGraphBlockProps {
  onFocus: () => void
}

const NotExistGraphBlock: React.SFC<NotExistGraphBlockProps> = ({
  onFocus
}) => (
  <div
    className="graph-block graph-block--none"
    onClick={onFocus}
  ></div>
)

interface GraphBlockProps {
  year: number
  month: number
  week: number
  count: number | false
  onFocus: () => void
}

const GraphBlock: React.SFC<GraphBlockProps> = ({year, month, week, count, onFocus}) => {
  if (count === false) {
    return <NotExistGraphBlock onFocus={onFocus} />
  }

  return (
    <div
      className={`graph-block graph-block--${count >= 4 ? 4 : count}`}
      title={`${year}年${month + 1}月${week + 1}週目${count}記事`}
      tabIndex={count > 0 ? 0 : -1}
      onFocus={onFocus}
    >
      <span className="graph-block__label">{`${year}年${month + 1}月${week + 1}週目${count}記事`}</span>
    </div>
  )
}

export default GraphBlock