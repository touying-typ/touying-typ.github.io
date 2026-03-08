import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import {
  Parameters,
  Param,
  ParamName,
  Signature,
  Default,
  SignatureName,
  SignatureParam,
  SourceLink,
  TypeLink,
} from '@site/src/components/Docs/FunctionDocumentation.js';
import PreviewedCode from '@site/src/components/PreviewedCode/index.js';

export default {
  ...MDXComponents,
  Parameters,
  Param,
  ParamName,
  Signature,
  SignatureName,
  SignatureParam,
  SourceLink,
  Default,
  TypeLink,
  PreviewedCode,
};
