const targets = {
  browsers: ['>0.25%', 'not dead'],
};

const modules = false

const plugins = [
  [
    'module-resolver',
    {
      extensions: ['.ts', '.tsx'],
    },
  ],
]

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets,
        modules,
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins,
}