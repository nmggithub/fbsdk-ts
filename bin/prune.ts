import { files } from '../package.json';
import fs from 'fs';
for (const file of files.filter((f) => f[0] == '!'))
    try {
        fs.unlinkSync(file.substr(1));
    } catch {}
