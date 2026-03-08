// Typst syntax highlighting grammar for Prism.js
// Adapted from https://github.com/lilaq-project/lilaq-project.github.io

const comment = [
  {
    pattern: /\/\*[\s\S]*?\*\//,
    greedy: true,
  },
  {
    pattern: /\/\/.*/,
    greedy: true,
  },
];

const raw = [
  {
    pattern: /`[\s\S]*?`/,
    greedy: true,
  },
  {
    pattern: /^```[\s\S]*?^```$/m,
    greedy: true,
  },
];

const label = {
  pattern: /<[\w\-.]*>/,
};

const general_escapes = [
  /\\u\{[\da-fA-F]+?\}/,
  /\\\S/,
  /\\\s/,
];

Prism.languages['typst-math'] = {
  comment: comment,
  raw: raw,
  escaped: general_escapes,
  operator: [
    /<=>|<==>|<-->|\[\||\|\]|\|\||:=|::=|\.\.\.|=:|!=|>>>|>=|<<<|<==|<=|\|->|=>|\|=>|==>|-->|~~>|~>|>->|->>|<--|<~~|<~|<-<|<<-|<->|->|<-|<<|>>/,
    /[_\\^+\-*/&']/,
  ],
  string: [
    /"(?:\\.|[^\\"])*"/,
    /\$/,
  ],
  function: /\b[a-zA-Z][\w-]*(?=\[|\()/,
  symbol: [
    /[a-zA-Z][\w]+/,
    /#[a-zA-Z][\w]*/,
  ],
};

const math = [
  {
    pattern: /\$(?:\\.|[^\\$])*?\$/,
    inside: Prism.languages['typst-math'],
  },
];

Prism.languages['typst-code'] = {
  typst: {
    pattern: /\[(?:[^\]\[]|\[(?:[^\]\[]|\[(?:[^\]\[]|\[[^\]\[]*\])*\])*\])*\]/,
    inside: Prism.languages['typst'],
    greedy: true,
  },
  comment: comment,
  math: math,
  function: [
    {
      pattern: /#?[a-zA-Z][\w-]*?(?=\[|\()/,
      greedy: true,
    },
    /(?<=show [\w.]*)[\w-]*\s*:/,
    /(?<=show\s*:\s*)[a-zA-Z][\w-]*/,
  ],
  keyword:
    /(?:#|\b)(?:none|auto|let|return|if|else|set|show|context|for|while|not|in|continue|break|include|import|as)\b/,
  boolean: /(?:#|\b)(?:true|false)\b/,
  string: {
    pattern: /"(?:\\.|[^\\"])*"/,
    greedy: true,
  },
  label: label,
  number: [
    /0b[01]+/,
    /0o[0-7]+/,
    /0x[\da-fA-F]+/,
    /(?<!\w)[\d]+\.?[\d]*(e\d+)?(?:in|mm|cm|pt|em|deg|rad|fr|%)?/,
  ],
  symbol: /#[\w\-.]+\./,
};

Prism.languages.typst = {
  comment: comment,
  raw: raw,
  math: math,
  'code-mode': [
    {
      pattern:
        /(?<!\\)#.*?\((?:[^)(]|\((?:[^)(]|\((?:[^)(]|\((?:[^)(]|\((?:[^)(]|\([^)(]*\))*\))*\))*\))*\))*\)(?!\s*=)/,
      inside: Prism.languages['typst-code'],
      greedy: true,
    },
    {
      pattern:
        /(?<!\\)#.*?(?:\((?:[^)(]|\((?:[^)(]|\((?:[^)(]|\((?:[^)(]|\((?:[^)(]|\([^)(]*\))*\))*\))*\))*\))*\))?.*?\{(?:[^}{]|\{(?:[^}{]|\{(?:[^}{]|\{[^}{]*\})*\})*\})*\}/,
      inside: Prism.languages['typst-code'],
      greedy: true,
    },
    {
      pattern: /(?<=set .*?) if/,
      inside: Prism.languages['typst-code'],
      greedy: true,
    },
    {
      pattern: /(?<!\\)#(?:import|let|if|context|set|show|include).*/,
      inside: Prism.languages['typst-code'],
      greedy: true,
    },
  ],
  function: [
    {
      pattern: /#[a-zA-Z][\w-]*(?=\[|\()/,
      greedy: true,
    },
    /(?<=#[\w.]+)[a-zA-Z][\w-]*(?=\[|\()/,
  ],
  string: {
    pattern: /#"(?:\\.|[^\\"])*"/,
    greedy: true,
  },
  escaped: general_escapes.concat([/~|---|--|-\?|\.\.\.-/]),
  label: label,
  reference: {
    pattern: /@[\w\-.]+/,
  },
  boltalic: [/_\*.*?\*_/, /\*_.*?_\*/],
  bold: /\*.*?\*/,
  italic: /_.*?_/,
  heading: /^\s*=+ .*/m,
  symbol: /#[\w\-.]*[\w-]+/,
};

Prism.languages['typst-code'].typst = {
  pattern:
    /\[(?:[^\]\[]|\[(?:[^\]\[]|\[(?:[^\]\[]|\[[^\]\[]*\])*\])*\])*\]/,
  inside: Prism.languages['typst'],
  greedy: true,
};

Prism.languages.typ = Prism.languages.typst;
Prism.languages.typc = Prism.languages['typst-code'];
