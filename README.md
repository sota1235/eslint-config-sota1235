# @sota1235/eslint-config

ESLint config for [@sota1235](https://github.com/sota1235).

Now only supports eslint v9.

### Description

### Install

```shell
npm i -D @sota1235/eslint-config
```

You can use like this.

```javascript
import { configs } from '@sota1235/eslint-config';

export default [
  ...configs.base(),
  ...configs.typescript({
    tsconfigPath: './tsconfig.json', // optional
  }),
  ...configs.react(),
];
```

### Licence

This software is released under the MIT License, see LICENSE.txt.

## Author

[@sota1235](https://github.com/sota1235)
