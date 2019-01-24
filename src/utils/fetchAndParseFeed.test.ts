import { itemsToPosts } from './fetchAndParseFeed'

it('itemsToPosts', async () => {
  const item = {
    pubDate: 'Mon, 01 Jul 2019 21:00:00 +0900',
  }
  const posts = itemsToPosts({}, item)
  expect(posts).toHaveProperty('2019-6-0')
  expect(posts['2019-6-0']).toHaveLength(1)
})
