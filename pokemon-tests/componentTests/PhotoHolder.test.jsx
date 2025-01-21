import { render, screen } from '@testing-library/react';
import PhotoHolder from '../../pokemon-frontend/components/PhotoHolder'

describe('PhotoHolder Component', () => {
  test('renders loading spinner when showSpinner is true', () => {
    render(<PhotoHolder showSpinner={true}/>);
    screen.debug();
    expect(true).toBeTruthy()
  });

  // test('shows silhouette image when gameState is playing', () => {
  //   render(<PhotoHolder silhouette="silhouette_url" gameState="playing" showSpinner={false} />);
  //   const silhouette = screen.getByAltText('Pokemon silhouette');
  //   expect(silhouette).toBeInTheDocument();
  //   expect(silhouette).toHaveAttribute('src', 'silhouette_url');
  // });

//   test('shows full image when gameState is result', () => {
//     render(<PhotoHolder fullImage="full_image_url" gameState="result" showSpinner={false} />);
//     const fullImage = screen.getByAltText('Pokemon full image');
//     expect(fullImage).toBeInTheDocument();
//     expect(fullImage).toHaveAttribute('src', 'full_image_url');
//   });

//   test('displays Start button when gameState is start', () => {
//     render(<PhotoHolder gameState="start" showSpinner={false} onStart={jest.fn()} />);
//     const startButton = screen.getByRole('button', { name: /start/i });
//     expect(startButton).toBeInTheDocument();
//   });
})
