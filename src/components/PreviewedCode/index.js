/**
 * PreviewedCode
 *
 * Wraps a Typst code block and its rendered preview image side-by-side
 * (or stacked on small screens).  Inspired by the lilaq documentation project.
 *
 * Usage in MDX (injected by src/remark/remark-example.js):
 *
 *   <PreviewedCode>
 *     ```typst
 *     ...
 *     ```
 *     ![alt](/img/typst-generated/<hash>.png)
 *   </PreviewedCode>
 */

import React from 'react';
import styles from './PreviewedCode.module.css';

export default function PreviewedCode({ children }) {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
}
