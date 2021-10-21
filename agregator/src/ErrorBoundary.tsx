import React, {ReactNode} from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State>{
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error: Error) {
    return {hasError: true};
  }

  render() {
    if (this.state.hasError) {
      return <h4>Lazy component isn't rendered</h4>;
    }

    return this.props.children;
  }
}
