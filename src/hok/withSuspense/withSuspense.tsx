import React, {ComponentType, LazyExoticComponent} from 'react';

export const withSuspense = <P extends object>(
    Component: LazyExoticComponent<ComponentType<P>>
) => {
    return (props: P) => (
        <React.Suspense fallback={<div>Loading...</div>}>
            <Component {...props} />
        </React.Suspense>
    );
};