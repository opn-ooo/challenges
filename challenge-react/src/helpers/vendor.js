import fpMap from 'lodash/fp/map';

const mapWithIndex = fpMap.convert({ cap: false });
export { mapWithIndex };

// lodash
export {
  bind,
  camelCase,
  ceil,
  chunk,
  compact,
  compose,
  concat,
  constant,
  defaultTo,
  divide,
  drop,
  every,
  filter,
  find,
  flatten,
  findIndex,
  forEach,
  first,
  last,
  get,
  getOr,
  groupBy,
  gt,
  head,
  identity,
  includes,
  invokeArgs,
  isArray,
  isBoolean,
  isEmpty,
  isEqual,
  isNaN,
  isNil,
  isNull,
  isString,
  isUndefined,
  join,
  keys,
  keyBy,
  kebabCase,
  lowerCase,
  map,
  max,
  mapKeys,
  mapValues,
  merge,
  mergeAll,
  minBy,
  multiply,
  omit,
  orderBy,
  pick,
  pickBy,
  pull,
  pullAt,
  range,
  reduce,
  reject,
  remove,
  result,
  replace,
  reverse,
  set,
  size,
  slice,
  snakeCase,
  some,
  sortBy,
  split,
  startCase,
  startsWith,
  take,
  template,
  times,
  toInteger,
  toNumber,
  toLower,
  toPairs,
  toString,
  toArray,
  trim,
  trimChars,
  trimCharsStart,
  upperCase,
  union,
  uniq,
  uniqBy,
  uniqueId,
  values,
  xor,
  xorWith,
  zipObject,
} from 'lodash';