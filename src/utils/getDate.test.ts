import moment from 'moment'
import getDate from './getDate'

moment.locale('ja')

it('last year', () => {
  let date = moment([2018, 11, 30]).toISOString()
  expect(getDate(date)).toMatchObject({year: 2018, month: 11, week: 4})
});

it('week 1', () => {
  let date = moment([2018, 11, 31]).toISOString()
  expect(getDate(date)).toMatchObject({year: 2019, month: 0, week: 0})
  date = moment([2019, 0, 6]).toISOString()
  expect(getDate(date)).toMatchObject({year: 2019, month: 0, week: 0})
});

it('week 2', () => {
  let date = moment([2019, 0, 7]).toISOString()
  expect(getDate(date)).toMatchObject({year: 2019, month: 0, week: 1})
  date = moment([2019, 0, 13]).toISOString()
  expect(getDate(date)).toMatchObject({year: 2019, month: 0, week: 1})
});

it('1/1 is first week', () => {
  for(let i = 2000; i < 3000; i++) {
      expect(
          getDate(moment([i, 0, 1]))
      ).toMatchObject({year: i, month: 0, week: 0})
  }
})

it('2/1 is first week of month', () => {
  for(let i = 2000; i < 3000; i++) {
      expect(
          getDate(moment([i, 1, 1]))
      ).toMatchObject({year: i, month: 1, week: 0})
  }
})

it('3/1 is first week of month', () => {
  for(let i = 2000; i < 3000; i++) {
      expect(
          getDate(moment([i, 2, 1]))
      ).toMatchObject({year: i, month: 2, week: 0})
  }
})

it('4/1 is first week of month', () => {
  for(let i = 2000; i < 3000; i++) {
      expect(
          getDate(moment([i, 3, 1]))
      ).toMatchObject({year: i, month: 3, week: 0})
  }
})

it('5/1 is first week of month', () => {
  for(let i = 2000; i < 3000; i++) {
      expect(
          getDate(moment([i, 4, 1]))
      ).toMatchObject({year: i, month: 4, week: 0})
  }
})

it('6/1 is first week of month', () => {
  for(let i = 2000; i < 3000; i++) {
      expect(
          getDate(moment([i, 5, 1]))
      ).toMatchObject({year: i, month: 5, week: 0})
  }
})

it('7/1 is first week of month', () => {
  for(let i = 2000; i < 3000; i++) {
      expect(
          getDate(moment([i, 6, 1]))
      ).toMatchObject({year: i, month: 6, week: 0})
  }
})

it('8/1 is first week of month', () => {
  for(let i = 2000; i < 3000; i++) {
      expect(
          getDate(moment([i, 7, 1]))
      ).toMatchObject({year: i, month: 7, week: 0})
  }
})

it('9/1 is first week of month', () => {
  for(let i = 2000; i < 3000; i++) {
      expect(
          getDate(moment([i, 8, 1]))
      ).toMatchObject({year: i, month: 8, week: 0})
  }
})

it('10/1 is first week of month', () => {
  for(let i = 2000; i < 3000; i++) {
      expect(
          getDate(moment([i, 9, 1]))
      ).toMatchObject({year: i, month: 9, week: 0})
  }
})

it('11/1 is first week of month', () => {
  for(let i = 2000; i < 3000; i++) {
      expect(
          getDate(moment([i, 10, 1]))
      ).toMatchObject({year: i, month: 10, week: 0})
  }
})

it('12/1 is first week of month', () => {
  for(let i = 2000; i < 3000; i++) {
      expect(
          getDate(moment([i, 11, 1]))
      ).toMatchObject({year: i, month: 11, week: 0})
  }
})