import React from 'react'

interface GraphBlockProps {
  month: number
  week: number
  count: number | false
  size: number,
  onFocus: () => void
}

const GraphBlock: React.SFC<GraphBlockProps> = ({month, week, count, size, onFocus}) => {
  const x = size * month
  const y = size * week
  const variant = typeof count === 'number' ? count : 'none'
  return <rect
    tabIndex={count > 0 ? 0 : -1}
    className={`graph-block graph-block--${variant}`}
    onClick={onFocus} onFocus={onFocus}
    x={x} y={y} rx={10} width={size} height={size} />
}

export default GraphBlock