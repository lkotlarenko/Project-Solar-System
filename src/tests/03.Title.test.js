import React from 'react';
import { render, screen} from '@testing-library/react';
import Title from '../components/Title';

const headlineText = "planets";

describe('3 - Crie um componente chamado `Title`', () => {
  it('Será validado se o componente `<Title />` é renderizado', () => {
    render(<Title headline={headlineText} />);
  });

  it('Será validado se o componente `<Title />` contém uma tag `h2`', () => {
    render(<Title headline={headlineText} />);
    const headline = screen.getByRole('heading', { level: 2 });
    
    expect(headline).toBeInTheDocument();
  });

  it('Será validado se o componente `<Title />` renderiza o texto passado pela prop `headline` dentro de uma tag `h2`', () => {
    render(<Title headline={headlineText} />);
    const headline = screen.getByRole('heading', { level: 2 });

    expect(headline).toHaveTextContent(/planets/i);
  });
});

