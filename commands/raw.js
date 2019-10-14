'use strict'

const fn = async ({ msg, chat, repositories, responseTypes }) => {
  return [ {
    type: responseTypes.TEXT,
    content: `\`\`\`\n${JSON.stringify(msg, null, 4)}\`\`\``,
    options: { parse_mode: 'markdown' }
  } ]
}

fn.regex = /\/raw/

module.exports = fn
