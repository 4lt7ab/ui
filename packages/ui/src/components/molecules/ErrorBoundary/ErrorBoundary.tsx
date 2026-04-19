import React from 'react';
import { semantic as t } from '@4lt7ab/core';
import { Card } from '../Card';
import { Button } from '../../atoms/Button';

/** Props for the ErrorBoundary component. */
export interface ErrorBoundaryProps {
  /** Content to render when no error has occurred. */
  children: React.ReactNode;
  /** Custom fallback UI renderer. Receives the caught error and a reset function. */
  fallback?: (props: { error: Error; resetErrorBoundary: () => void }) => React.ReactNode;
  /** Callback fired when an error is caught. Useful for logging. */
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

interface ErrorBoundaryState {
  error: Error | null;
  showStack: boolean;
}

/**
 * A themed React error boundary that catches render errors in its subtree
 * and displays a fallback UI with retry capability.
 */
export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null, showStack: false };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.props.onError?.(error, errorInfo);
  }

  resetErrorBoundary = (): void => {
    this.setState({ error: null, showStack: false });
  };

  render(): React.ReactNode {
    const { error, showStack } = this.state;
    const { children, fallback } = this.props;

    if (error === null) {
      return children;
    }

    if (fallback) {
      return fallback({ error, resetErrorBoundary: this.resetErrorBoundary });
    }

    return (
      <div style={{ borderColor: t.colorError, borderWidth: '2px', borderStyle: 'solid', borderRadius: t.radiusLg }}>
      <Card
        variant="flat"
        padding="lg"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: t.spaceMd }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: t.spaceSm }}>
            <span
              style={{
                fontSize: t.fontSizeLg,
                color: t.colorError,
                fontWeight: t.fontWeightSemibold,
                fontFamily: t.fontSans,
              }}
            >
              Something went wrong
            </span>
          </div>

          <p
            style={{
              margin: 0,
              fontFamily: t.fontMono,
              fontSize: t.fontSizeSm,
              lineHeight: t.lineHeightBase,
              color: t.colorText,
              background: t.colorSurfaceRaised,
              padding: t.spaceSm,
              borderRadius: t.radiusMd,
              wordBreak: 'break-word',
            }}
          >
            {error.message}
          </p>

          {error.stack && (
            <div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => this.setState({ showStack: !showStack })}
              >
                {showStack ? 'Hide stack trace' : 'Show stack trace'}
              </Button>

              {showStack && (
                <pre
                  style={{
                    marginTop: t.spaceSm,
                    fontFamily: t.fontMono,
                    fontSize: t.fontSizeXs,
                    lineHeight: t.lineHeightBase,
                    color: t.colorTextSecondary,
                    background: t.colorSurfaceRaised,
                    padding: t.spaceSm,
                    borderRadius: t.radiusMd,
                    overflow: 'auto',
                    maxHeight: '200px',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-all',
                  }}
                >
                  {error.stack}
                </pre>
              )}
            </div>
          )}

          <div>
            <Button variant="secondary" size="sm" onClick={this.resetErrorBoundary}>
              Try again
            </Button>
          </div>
        </div>
      </Card>
      </div>
    );
  }
}
