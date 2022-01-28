import { Component } from "react";
import ErrorDisplay from "./ErrorDisplay";

interface Props {}
interface State {
  hasError: boolean;
  error?: {    
    message?: string
  }
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }
  
  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error: {
        message: error.message
      }
    }
  }
 
  public render() {
    if(this.state.hasError) {
      return <ErrorDisplay 
        message={this.state.error?.message}
      />
    }

    return this.props.children
  }
}

export default ErrorBoundary