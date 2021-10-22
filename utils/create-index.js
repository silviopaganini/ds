#!/usr/bin/env node

const rimraf = require('rimraf')
const path = require('path')
const fs = require('fs')

const BASE_PATH = path.resolve(__dirname, '../src/components')

const getDirectories = path =>
  fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path + '/' + file).isDirectory()
  })

rimraf(path.resolve(BASE_PATH, 'index.ts'), () => {
  const folders = getDirectories(BASE_PATH)
  const content = folders.reduce((acc, item) => `${acc}export { ${item} } from './${item}'\n`, '')
  fs.writeFile(path.resolve(BASE_PATH, 'index.ts'), content, { flag: 'a+' }, err => {
    if (err) {
      console.error(err)
      return
    }
    console.log('Index Written successfully!')
  })
})
