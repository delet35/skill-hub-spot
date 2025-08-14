import React from 'react';

type State = { hasError: boolean; message?: string };
export default class ErrorBoundary extends React.Component<React.PropsWithChildren, State> {
  state: State = { hasError: false };
  static getDerivedStateFromError(err: unknown) {
    return { hasError: true, message: (err as Error)?.message ?? 'Unexpected error' };
  }
  componentDidCatch(err: unknown) { console.error('App crash:', err); }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{padding:24}}>
          <h1>Something went wrong.</h1>
          <pre style={{whiteSpace:'pre-wrap'}}>{this.state.message}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}
