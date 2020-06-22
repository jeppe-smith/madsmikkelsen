const path = require("path")
const fs = require("fs")

const type = process.argv[2]
const name = process.argv[3]

if (type === "component") {
  const dest = path.resolve(process.cwd(), "src/components", name)

  fs.mkdirSync(dest)

  fs.writeFileSync(
    path.join(dest, `${name}.js`),
    `import React from 'react'\n\nexport const ${capitalize(
      name
    )} = () => (\n<div></div>\n)\n`
  )
  fs.writeFileSync(path.join(dest, `${name}.scss`), "")
  fs.writeFileSync(
    path.join(dest, "index.js"),
    `import './${name}.scss'\n\nexport * from './${name}'\n`
  )
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
