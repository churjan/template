const hello = '   Hello, World!  '
const wsRegex = /^\s*|\s+$/g
const result = hello.replace(wsRegex, '')
