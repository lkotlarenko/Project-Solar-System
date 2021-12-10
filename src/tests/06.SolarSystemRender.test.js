import React from 'react';
import { render, screen } from '@testing-library/react';
import SolarSystem from '../components/SolarSystem';

import Planets from "../data/planets";


describe('6 - Renderize uma lista com os planetas do Sistema Solar', () => {
  it('Será verificado se é renderizado um componente `<PlanetCard />` para cada planeta da lista de planetas', () => {
    render(<SolarSystem />);
    const planetCards = screen.getAllByTestId('planet-card');
    
    expect(planetCards).toHaveLength(8);
  });

  it('Será verificado se todos os planetas do Sistema Solar estão sendo listados na tela', () => {
    render(<SolarSystem />);

    const allPlanets = screen.getAllByTestId('planet-name');

    allPlanets.forEach((planet, index) => {
      expect(planet).toHaveTextContent(Planets[index].name);
    });
  });
});
