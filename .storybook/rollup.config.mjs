import path from 'path';
import fs from 'fs';
import lwcRollupPlugin from '@lwc/rollup-plugin'
import rollupNodeResolve from '@rollup/plugin-node-resolve'
import rollupCommonjs from '@rollup/plugin-commonjs'

import syntheticShadow from './plugins/synthetic-shadow.mjs'

const lwcConfigJsonFile = path.resolve(__dirname,'..', 'lwc.config.json');
const lwcConfigJson = JSON.parse(fs.readFileSync(lwcConfigJsonFile, 'utf8'));
const lwcConfigJsonEffective = lwcConfigJson.modules.reduce((acc, mod) => {
  if (mod.dir) {
    mod.dir = `../${mod.dir}`;
  }
  acc.push(mod);
  console.debug('acc',acc)
  return acc;
}, []);


export default {
  input: path.resolve(__dirname, '..','stories','index.js'),
  output: {
    file: path.resolve(__dirname, 'build','main-storybook.js'),
    format:'esm',
  },
  plugins: [
    syntheticShadow(),
    lwcRollupPlugin({
      modules: lwcConfigJsonEffective
    }),
    rollupNodeResolve(),
    rollupCommonjs()
  ].filter(Boolean),
  watch: {
    exclude: ['node_modules/**']
  }
}