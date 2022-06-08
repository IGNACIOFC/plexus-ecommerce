import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from 'react-query';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Header';

describe('Header component', () => {
  it('render header', () => {
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
          <Header />
        </Router>
      </QueryClientProvider>
    );
    const header = screen.getByText(/Logo/i);
    console.log(header)
    expect(header).toBeInTheDocument();
  })
})