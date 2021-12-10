import React from 'react';
import { render, screen } from '@testing-library/react';
import Missions from '../components/Missions';

describe('8 - Renderize o componente `Title` dentro do componente `Missions`', () => {
  it('Será validado se o texto "Missões" é renderizado usando o componente `Title` dentro do componente `Missions`', () => {
    render(<Missions />);
    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(/Missões/i);
  });
});
