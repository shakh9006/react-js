import React, { Suspense } from 'react'

const ReactLazy = React.lazy(() => import('./ReactLazy'))

// 1. React.lazy
// ***************************************
export default function MyComponent() {
    return (
        <div>
            <Suspense fallback={<div>Loading.....</div>}>
                <ReactLazy />
            </Suspense>
        </div>
    )
}
// ***************************************