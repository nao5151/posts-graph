import Parser, { Items, Output } from 'rss-parser'
import getDate from './getDate'

const dateOption = {
  locale: 'ja-JP',
  stringOptions: {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
}

export async function fetchFeed(rss: string): Promise<Output> {
  const cache = sessionStorage.getItem(rss)
  if (cache) return JSON.parse(cache)

  const parser = new Parser()
  const feed = await parser.parseURL(rss)
  sessionStorage.setItem(rss, JSON.stringify(feed))
  return feed
}

export interface Posts {
  [key: string]: Array<Items | number>
}

export function itemsToPosts(acm: Posts, item: Items) {
  const { year, month, week } = getDate(item.pubDate as string)
  const newItem = {
    ...item,
    year,
    month,
    week,
    pubDate: new Date(item.pubDate as string).toLocaleDateString(dateOption.locale, dateOption.stringOptions)
  }

  const key = `${year}-${month}-${week}`
  if (!acm[key]) {
    acm[key] = []
  }
  acm[key].push(newItem)
  if (!acm['years']) {
    acm['years'] = []
  }
  acm['years'].push(year)

  return acm
}

export default async function fetchAndParseFeed(rss: string): Promise<Posts> {
  const feed = await fetchFeed(rss)
  if (!feed.items) return {}

  return feed.items.reduceRight(itemsToPosts, {})
}