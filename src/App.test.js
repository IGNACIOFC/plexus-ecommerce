import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';


test('renders learn react link', () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60000 * 24
      }
    }
  })
  render(
    <QueryClientProvider client={queryClient}>
      <Router>
        <App />
      </Router>
    </QueryClientProvider>
  );
  const linkElement = screen.getByText(/Logo/i);
  expect(linkElement).toBeInTheDocument();
});
