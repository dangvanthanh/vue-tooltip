import config from './rollup.config.dev';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

config.output = {
  name: 'Tooltip',
  file: 'dist/vue-a11y-tooltip.min.js',
  format: 'umd',
  sourcemap: false
};

config.plugins.push(uglify({}, minify));

export default config;
