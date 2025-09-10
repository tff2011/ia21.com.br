import React from 'react'
import { Fragment, jsx, jsxs } from 'react/jsx-runtime'

type Components = Record<string, React.ComponentType<Record<string, unknown>>>

interface MDXProps {
  components?: Components
}

/**
 * Render precompiled MDX code (as produced by Velite's s.mdx()) on the server.
 * This mirrors next-mdx-remote's RSC runtime evaluation but skips re-compilation.
 */
export function renderPrecompiledMDX(code: string, components?: Components) {
  try {
    const runtime = { Fragment, jsx, jsxs }
    // The compiled code expects `arguments[0]` to be the JSX runtime
    const hydrateFn = new Function(`${code}`)
    const { default: Content } = hydrateFn(runtime) as { default: React.ComponentType<MDXProps> }
    return React.createElement(Content, { components })
  } catch (error) {
    console.error('[mdx-renderer] Failed to render precompiled MDX:', error)
    return React.createElement(
      'div',
      { className: 'text-sm text-red-600' },
      'Erro ao renderizar o conteúdo MDX.'
    )
  }
}

