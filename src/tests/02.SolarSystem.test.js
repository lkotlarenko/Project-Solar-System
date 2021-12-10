import React from 'react';
import { render, screen} from '@testing-library/react';
import App from '../App';
import SolarSystem from '../components/SolarSystem';

describe('2 - Crie um componente chamado `SolarSystem`', () => {
  it('Será verificado se o componente <SolarSystem /> existe', () => {
    render(<SolarSystem />);
  });

  it('Será validado se existe uma `div` que possui o data-testid="solar-system"', () => {
    render(<SolarSystem />);
    expect(screen.getByTestId("solar-system")).toBeInTheDocument();
  });

  it('Será validado se o componente `<SolarSystem />` está sendo renderizado no componente principal `App`', () => {
    render(<App />);
    expect(screen.getByTestId("solar-system")).toBeInTheDocument();
  });
});
