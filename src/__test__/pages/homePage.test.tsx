import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderWithProviders } from '__test__/test-utils';
import HomePage from 'pages/home';

describe('test home page', () => {
  it('render page', () => {
    const queryClient = new QueryClient();

    renderWithProviders(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </QueryClientProvider>,
    );
  });
});
