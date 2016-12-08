import releases from './node-releases-list.js'
import { curry } from 'ramda'
import { differenceInCalendarDays } from 'date-fns'

const regexMatchReleaseLine =

/(\d{4}-\d{2}-\d{2}), (Version \d{1,2}\.\d{1,2}) [\(\']\w+[\)\']{1,}(\s\(\w+\))?, (@\w{1,})/i
/*
2016-04-26          ,  Version 6.0               (Current)              (LTS)?  , @jasnell
*/

const diffInDays = differenceInCalendarDays

export default () => new Promise((resolve, reject) => {

  const resolved = releases
  .split('\n')
  .map((version) => {
    const matches = version.match(regexMatchReleaseLine)

    return Array.isArray(matches) ?
      ({
        date: matches[1],
        version: matches[2],
        releaser: matches[4]
      }) : false
  })
  .filter((release) => !!release)
  .reduce((acc, release, index, releases) => {

    // first array item
    if (index === 0) {
      acc.firstDate = release.date
    }


    // last array item
    if (releases.length - 1 !== index) { return acc }

    acc.lastDate = release.date
    acc.diffInDays = diffInDays(acc.firstDate, acc.lastDate)
    acc.releases = releases

    return acc
  }, {})

  resolve(resolved)
})
