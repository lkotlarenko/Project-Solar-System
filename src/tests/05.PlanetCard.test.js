import React from 'react';
import { render, screen } from '@testing-library/react';
import PlanetCard from '../components/PlanetCard';


describe('5 - Crie um componente chamado `PlanetCard`', () => {
  it('Será validado se o componente `<PlanetCard />` é renderizado', () => {
    render(<PlanetCard planetName="Terra" planetImage="path-to-image" />);
  });

  it('Será validado se o componente `<PlanetCard />` possui uma div com o atributo `data-testid="planet-card"`', () => {
    render(<PlanetCard planetName="Terra" planetImage="path-to-image" />);
    const planetCard = screen.getByTestId("planet-card");
    
    expect(planetCard).toBeInTheDocument();
  });

  

  it('Será validado se é renderizado o texto recebido pela prop `planetName`', () => {
    render(<PlanetCard planetName="Terra" planetImage="path-to-image" />);
    const planetText = screen.getByText("Terra");
    expect(planetText).toBeInTheDocument();
  });

  it('Será validado se é renderizada uma imagem com o atributo `src` com o mesmo valor recebido pela prop `planetImage`', () => {
    render(<PlanetCard planetName="Terra" planetImage="path-to-image" />);

    const planetImage = screen.getByRole('img');
    expect(planetImage).toBeInTheDocument();
    expect(planetImage).toHaveAttribute('src', 'path-to-image');
  });

  it('Será validado se, além do atributo `src`, a imagem renderizada possui o atributo `alt` com o texto "Planeta {planetName}"', () => {
    render(<PlanetCard planetName="Terra" planetImage="path-to-image" />);

    const planetImage = screen.getByRole('img');
    expect(planetImage).toHaveAttribute('alt', 'Planeta Terra');
  });
});
