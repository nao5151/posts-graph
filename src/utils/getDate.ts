import moment from 'moment'
moment.updateLocale('ja', {
  week : {
    dow : 1,
    doy : 1,
  },
})

export default function getDate(dateValue: string | number | Date) {
  const date = moment(dateValue)
  const lastDayOfWeek = date.endOf('week')
  const firstDayOfMonth = lastDayOfWeek.clone().startOf('month')

  return {
    year: lastDayOfWeek.year(),
    month: lastDayOfWeek.month(),
    week: lastDayOfWeek.diff(firstDayOfMonth, 'weeks')
  }
}