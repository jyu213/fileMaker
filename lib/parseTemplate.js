
const mustachTags = [ '{{', '}}' ]
const spaceRe = /\s+/

function escapeRegExp (string) {
  return string.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}


const EMPTY = []
/**
 * parse mustach template and return tags
 *
 * @return
 */
function parseTemplate (template, tags) {
  if (!template) {
    return EMPTY
  }

  tags = tags || mustachTags
  if (typeof tags === 'string') {
    tags = tags.split(spaceRe, 2)
  }
  if (!Array.isArray(tags) || tags.length !== 2) {
    tags = mustachTags
  }

  // const regStr = `${escapeRegExp(tags[0])}[^\\./!>\\^]+?(\\s*)(.*?)(\\s*)${escapeRegExp(tags[1])}`
  const regStr = `${escapeRegExp(tags[0])}(\\s*)(.*?)(\\s*)${escapeRegExp(tags[1])}`
  const ignoreReg = /[./!>^]/
  const repReg = /^[#|&]\s*/
  const matcher = new RegExp(regStr, 'g')
  // const matcher = /{{(.*?)}}/g
  let match
  let arr = []

  while (match = matcher.exec(template)) {
    arr.push(match[2])
  }
  arr = arr.filter((item) => { return !ignoreReg.test(item[0]) }).map((item) => { return item.replace(repReg, '') })
  return arr
}

module.exports = parseTemplate
