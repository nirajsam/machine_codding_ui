import React, { useState, useEffect } from 'react';

// Error Boundary Component
const ErrorBoundary = ({ children }) => {
  const [error, setError] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);

  useEffect(() => {
    const handleError = (error, errorInfo) => {
      setError(error);
      setErrorInfo(errorInfo);

      // You can log the error to a service like Sentry or any other error logging service
      // logErrorToService(error, errorInfo);
    };

    // Set up the error handler
    window.addEventListener('error', handleError);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);

  if (error) {
    // Render a fallback UI when an error occurs
    return (
      <div>
        <h2>Something went wrong!</h2>
        <p>{error && error.toString()}</p>
        <p>Component Stack Error Details:</p>
        <pre>{errorInfo && errorInfo.componentStack}</pre>
      </div>
    );
  }

  // Render the children if no error occurred
  return children;
};

export default ErrorBoundary