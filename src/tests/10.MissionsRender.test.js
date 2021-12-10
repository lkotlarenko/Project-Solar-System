import React from 'react';
import { render, screen } from '@testing-library/react';

import Missions from '../components/Missions';
import missionsData from '../data/missions';

describe('10 - Renderize uma lista com as missões espaciais', () => {
  
  it('Será verificado se é renderizado um componente `<MissionCard />` para cada missão espacial da lista de missões', () => {
    render(<Missions />);
    const missionsCards = screen.getAllByTestId('mission-card');
    
    expect(missionsCards).toHaveLength(20);
  });

  it('Será verificado se todas as missões espaciais estão sendo listados na tela', () => {
    render(<Missions />);
    const allMissionsName = screen.getAllByTestId('mission-name');

    allMissionsName.forEach((missionName, index) => {
      expect(missionName).toHaveTextContent(missionsData[index].name);
    });
  });
});
