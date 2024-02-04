import React, { type ErrorInfo, type ReactNode, Suspense } from 'react';
import { ErrorPage } from 'widgets/errorPage';
import Loader from 'shared/ui/loader/Loader';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): {
        hasError: boolean
    } {
        // Обработка ошибки
        console.error(error);
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo): void {
        console.log(error, info);
    }

    render(): ReactNode | null {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {

            return (
                <Suspense fallback={<Loader/>}>
                    <ErrorPage/>
                </Suspense>
            );
        }

        return children;
    }
}

export default ErrorBoundary;
