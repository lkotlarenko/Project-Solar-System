import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import Missions from '../components/Missions';

describe('7 - Crie um componente chamado `Missions`', () => {
  it('Será validado se o componente `<Missions />` é renderizado', () => {
    render(<Missions />);
  });

  it('Será validado se existe uma `div` que possui o `data-testid="missions"`', () => {
    render(<Missions />);
    expect(screen.getByTestId("missions")).toBeInTheDocument();
  });

  it('Será validado se o componente `<Missions />` está sendo renderizado no componente principal `App`', () => {
    render(<App />);
    expect(screen.getByTestId("missions")).toBeInTheDocument();
  });
});