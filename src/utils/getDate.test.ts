import moment from 'moment'
import getDate from './getDate'

it('last year', () => {
  let date = moment('2018-12-30T00:00:00').utcOffset("+09:00").toISOString()
  expect(getDate(date)).toMatchObject({year: 2018, month: 11, week: 4})
});

it('week 1', () => {
  let date = moment('2018-12-31T00:00:00').utcOffset("+09:00").toISOString()
  expect(getDate(date)).toMatchObject({year: 2019, month: 0, week: 0})
  date = moment('2019-01-01T00:00:00').utcOffset("+09:00").toISOString()
  expect(getDate(date)).toMatchObject({year: 2019, month: 0, week: 0})
  date = moment('2019-01-06T23:59:59').utcOffset("+09:00").toISOString()
  expect(getDate(date)).toMatchObject({year: 2019, month: 0, week: 0})
});

it('week 2', () => {
  let date = moment('2019-01-07T00:00:00').utcOffset("+09:00").toISOString()
  expect(getDate(date)).toMatchObject({year: 2019, month: 0, week: 1})
  date = moment('2019-01-13T23:59:59').utcOffset("+09:00").toISOString()
  expect(getDate(date)).toMatchObject({year: 2019, month: 0, week: 1})
});