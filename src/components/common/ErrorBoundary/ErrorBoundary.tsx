import { FC, ReactNode } from 'react';
import { ErrorBoundary as ReactErrorBoundary, FallbackProps } from 'react-error-boundary';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import styles from './ErrorBoundary.module.css';

interface ErrorBoundaryProps {
  children: ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
  onReset?: () => void;
}

const ErrorFallback: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  const isDevelopment = import.meta.env.DEV as boolean;

  const handleGoHome = (): void => {
    window.location.href = '/';
  };

  return (
    <div className={styles.errorBoundary}>
      <div className={styles.errorContainer}>
        <div className={styles.errorIcon}>
          <AlertTriangle size={48} />
        </div>

        <h2 className={styles.errorTitle}>Oops! Something went wrong</h2>

        <p className={styles.errorMessage}>
          We encountered an unexpected error. This has been logged and
          we'll look into it.
        </p>

        {isDevelopment && error && (
          <details className={styles.errorDetails}>
            <summary>Error Details (Development Only)</summary>
            <pre className={styles.errorStack}>
              <strong>Error:</strong> {error.toString()}
              {error.stack && (
                <>
                  {'\n\n'}
                  <strong>Stack Trace:</strong>
                  {'\n'}
                  {error.stack}
                </>
              )}
            </pre>
          </details>
        )}

        <div className={styles.errorActions}>
          <button
            onClick={resetErrorBoundary}
            className={styles.btnRetry}
            aria-label="Try again"
          >
            <RefreshCw size={18} />
            Try Again
          </button>

          <button
            onClick={handleGoHome}
            className={styles.btnHome}
            aria-label="Go to homepage"
          >
            <Home size={18} />
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

const ErrorBoundary: FC<ErrorBoundaryProps> = ({ children, onError, onReset }) => {
  const handleError = (error: Error, errorInfo: React.ErrorInfo): void => {
    if (import.meta.env.DEV) {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    onError?.(error, errorInfo);
  };

  const handleReset = (): void => {
    onReset?.();
  };

  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={handleError}
      onReset={handleReset}
    >
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;
