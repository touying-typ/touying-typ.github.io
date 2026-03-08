import styles from './docs.module.css';

// Map Typst built-in type names to their documentation URL paths on typst.app.
const TYPST_TYPE_URLS = {
  // foundations
  'arguments': 'foundations/arguments',
  'array': 'foundations/array',
  'auto': 'foundations/auto',
  'bool': 'foundations/bool',
  'boolean': 'foundations/bool',
  'bytes': 'foundations/bytes',
  'content': 'foundations/content',
  'datetime': 'foundations/datetime',
  'dictionary': 'foundations/dictionary',
  'duration': 'foundations/duration',
  'float': 'foundations/float',
  'function': 'foundations/function',
  'int': 'foundations/int',
  'integer': 'foundations/int',
  'label': 'foundations/label',
  'module': 'foundations/module',
  'none': 'foundations/none',
  'plugin': 'foundations/plugin',
  'regex': 'foundations/regex',
  'selector': 'foundations/selector',
  'str': 'foundations/str',
  'string': 'foundations/str',
  'type': 'foundations/type',
  'version': 'foundations/version',
  // layout
  'alignment': 'layout/alignment',
  'angle': 'layout/angle',
  'direction': 'layout/direction',
  'fraction': 'layout/fraction',
  'length': 'layout/length',
  'ratio': 'layout/ratio',
  'relative': 'layout/relative',
  // visualize
  'color': 'visualize/color',
  'gradient': 'visualize/gradient',
  'pattern': 'visualize/pattern',
  'stroke': 'visualize/stroke',
  // introspection
  'counter': 'introspection/counter',
  'location': 'introspection/location',
  'state': 'introspection/state',
  // symbols
  'symbol': 'symbols/symbol',
};

export const TypeLink = ({ type }) => {
  const path = TYPST_TYPE_URLS[type];
  if (path) {
    return (
      <a href={`https://typst.app/docs/reference/${path}`} target="_blank" rel="noopener noreferrer" className={styles.typeLink}>
        {type}
      </a>
    );
  }
  return <code>{type}</code>;
};

export const Signature = ({ children }) => (
  <div className={styles.signature}>
    {children}
  </div>
);

export const SignatureName = ({ children }) => (
  <span className={styles.signatureName}>
    {children}
  </span>
);

export const SignatureParam = ({ children }) => (
  <span className={styles.signatureParam}>
    {children}
  </span>
);

export const SourceLink = ({ href }) => (
  <span><a href={href} className={styles.sourceLink}>(source)</a></span>
);

export const Parameters = ({ children }) => (
  <div>
    <div className={styles.parametersHeader}>
      Parameters
    </div>
    <div className={styles.parameters}>
      {children}
    </div>
  </div>
);

export const Param = ({ children }) => (
  <div className={styles.param}>
    {children}
  </div>
);

export const ParamName = ({ children }) => (
  <span className={styles.paramName}>
    {children}
  </span>
);

export const Default = ({ children }) => (
  <span className={styles.defaultValue}>
    &nbsp;&nbsp;&nbsp;<i>default:</i> {children}
  </span>
);
