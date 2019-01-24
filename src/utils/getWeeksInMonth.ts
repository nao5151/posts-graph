import moment from 'moment'
moment.updateLocale('ja', {
  week: {
    dow: 1,
    doy: 7,
  },
})

export default function getWeeksInMonth(year: number, month: number): number {
  const targetMonth = moment([year, month, 1])
  const nextMonth = targetMonth.clone().add(1, 'month')
  let weeks =
    nextMonth.month() === 0 ? targetMonth.weeksInYear() + 1 : nextMonth.weeks()
  return weeks - targetMonth.weeks()
}
