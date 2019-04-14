import React, { ReactChild } from 'react'

interface HeaderProps {
  year: number
  minYear: number
  maxYear: number
  prev?: ReactChild
  next?: ReactChild
  prevClick?: () => void
  nextClick?: () => void
}

const Header = ({year, minYear, maxYear, prev = 'prev', next = 'next', prevClick, nextClick}: HeaderProps) => (
  <div className="header">
    <button className={`header__button ${minYear < year ? '' : 'header__button--disabled'}`} onClick={prevClick}>{prev}</button>
    <h3 className="header__title">{year}</h3>
    <button className={`header__button ${year < maxYear ? '' : 'header__button--disabled'}`} onClick={nextClick}>{next}</button>
  </div>
)

export default Header