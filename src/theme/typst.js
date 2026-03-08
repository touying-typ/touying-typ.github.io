// Prism theme for Typst code blocks.
// Adapted from https://github.com/lilaq-project/lilaq-project.github.io

export const light = {
  plain: {},
  styles: [
    {
      types: ['comment'],
      style: { color: '#6a9153', fontStyle: 'italic' },
    },
    {
      types: ['keyword', 'boolean'],
      style: { color: '#0000ff' },
    },
    {
      types: ['function'],
      style: { color: '#795e26' },
    },
    {
      types: ['number'],
      style: { color: '#098658' },
    },
    {
      types: ['string', 'raw'],
      style: { color: '#a31515' },
    },
    {
      types: ['symbol'],
      style: { color: '#8b41b1' },
    },
    {
      types: ['label', 'reference', 'operator'],
      style: { color: '#1d6c76' },
    },
    {
      types: ['bold', 'heading'],
      style: { fontWeight: 'bold' },
    },
    {
      types: ['italic'],
      style: { fontStyle: 'italic' },
    },
    {
      types: ['boltalic'],
      style: { fontWeight: 'bold', fontStyle: 'italic' },
    },
  ],
};

export const dark = {
  plain: {},
  styles: [
    {
      types: ['comment'],
      style: { color: '#b0b3c2', fontStyle: 'italic' },
    },
    {
      types: ['keyword', 'boolean'],
      style: { color: '#7dcfff' },
    },
    {
      types: ['function'],
      style: { color: '#7cd5ff' },
    },
    {
      types: ['number'],
      style: { color: '#ff7d79' },
    },
    {
      types: ['string', 'raw'],
      style: { color: '#80f4b6' },
    },
    {
      types: ['symbol'],
      style: { color: '#caa8ff' },
    },
    {
      types: ['label', 'reference', 'operator'],
      style: { color: '#d9f8f4' },
    },
    {
      types: ['bold', 'heading'],
      style: { fontWeight: 'bold' },
    },
    {
      types: ['italic'],
      style: { fontStyle: 'italic' },
    },
    {
      types: ['boltalic'],
      style: { fontWeight: 'bold', fontStyle: 'italic' },
    },
  ],
};
