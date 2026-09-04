import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import { Callout } from 'nextra/components'
import type { MDXComponents } from 'mdx/types'

const docsComponents = getDocsMDXComponents()

export function useMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...docsComponents,
    Callout,
    ...components
  }
}
