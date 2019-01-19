import moment from 'moment'
import getWeeksInMonth from './getWeeksInMonth'

moment.locale('ja')

it('getWeeksInMonth 2017', () => {
  expect(getWeeksInMonth(2017, 0)).toBe(5)
  expect(getWeeksInMonth(2017, 1)).toBe(4)
  expect(getWeeksInMonth(2017, 2)).toBe(4)
  expect(getWeeksInMonth(2017, 3)).toBe(5)
  expect(getWeeksInMonth(2017, 4)).toBe(4)
  expect(getWeeksInMonth(2017, 5)).toBe(4)
  expect(getWeeksInMonth(2017, 6)).toBe(5)
  expect(getWeeksInMonth(2017, 7)).toBe(4)
  expect(getWeeksInMonth(2017, 8)).toBe(4)
  expect(getWeeksInMonth(2017, 9)).toBe(5)
  expect(getWeeksInMonth(2017, 10)).toBe(4)
  expect(getWeeksInMonth(2017, 11)).toBe(5)
});

it('getWeeksInMonth 2018', () => {
  expect(getWeeksInMonth(2018, 0)).toBe(4)
  expect(getWeeksInMonth(2018, 1)).toBe(4)
  expect(getWeeksInMonth(2018, 2)).toBe(4)
  expect(getWeeksInMonth(2018, 3)).toBe(5)
  expect(getWeeksInMonth(2018, 4)).toBe(4)
  expect(getWeeksInMonth(2018, 5)).toBe(4)
  expect(getWeeksInMonth(2018, 6)).toBe(5)
  expect(getWeeksInMonth(2018, 7)).toBe(4)
  expect(getWeeksInMonth(2018, 8)).toBe(5)
  expect(getWeeksInMonth(2018, 9)).toBe(4)
  expect(getWeeksInMonth(2018, 10)).toBe(4)
  expect(getWeeksInMonth(2018, 11)).toBe(5)
});

it('getWeeksInMonth 2019', () => {
  expect(getWeeksInMonth(2019, 0)).toBe(4)
  expect(getWeeksInMonth(2019, 1)).toBe(4)
  expect(getWeeksInMonth(2019, 2)).toBe(5)
  expect(getWeeksInMonth(2019, 3)).toBe(4)
  expect(getWeeksInMonth(2019, 4)).toBe(4)
  expect(getWeeksInMonth(2019, 5)).toBe(5)
  expect(getWeeksInMonth(2019, 6)).toBe(4)
  expect(getWeeksInMonth(2019, 7)).toBe(4)
  expect(getWeeksInMonth(2019, 8)).toBe(5)
  expect(getWeeksInMonth(2019, 9)).toBe(4)
  expect(getWeeksInMonth(2019, 10)).toBe(4)
  expect(getWeeksInMonth(2019, 11)).toBe(5)
});

it('getWeeksInMonth 2020', () => {
  expect(getWeeksInMonth(2020, 0)).toBe(4)
  expect(getWeeksInMonth(2020, 1)).toBe(4)
  expect(getWeeksInMonth(2020, 2)).toBe(5)
  expect(getWeeksInMonth(2020, 3)).toBe(4)
  expect(getWeeksInMonth(2020, 4)).toBe(5)
  expect(getWeeksInMonth(2020, 5)).toBe(4)
  expect(getWeeksInMonth(2020, 6)).toBe(4)
  expect(getWeeksInMonth(2020, 7)).toBe(5)
  expect(getWeeksInMonth(2020, 8)).toBe(4)
  expect(getWeeksInMonth(2020, 9)).toBe(4)
  expect(getWeeksInMonth(2020, 10)).toBe(5)
  expect(getWeeksInMonth(2020, 11)).toBe(4)
});