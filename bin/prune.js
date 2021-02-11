const { files } = require('../package.json');
const fs = require('fs');
for (const file of files.filter(f => f[0] == '!')) try { fs.unlinkSync(file.substr(1)) } catch {};