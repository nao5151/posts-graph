import React from 'react'

interface HeaderProps {
  year: number
  minYear: number
  maxYear: number
  prevClick?: () => void
  nextClick?: () => void
}

const Header = ({year, minYear, maxYear, prevClick, nextClick}: HeaderProps) => (
  <div className="header">
    <button className={`header__button ${minYear < year ? '' : 'header__button--disabled'}`} onClick={prevClick}>prev</button>
    <h3 className="header__title">{year}</h3>
    <button className={`header__button ${year < maxYear ? '' : 'header__button--disabled'}`} onClick={nextClick}>next</button>
  </div>
)

export default Header