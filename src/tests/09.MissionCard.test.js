import React from 'react';
import { render, screen } from '@testing-library/react';
import MissionCard from '../components/MissionCard';

const missionTest = {
  year: "2021",
  name: 'Siberiano',
  country: 'URSS',
  destination: 'Lua',
};

describe('9 - Crie um componente chamado `MissionCard`', () => {
  it('Será validado se o componente `<MissionCard />` é renderizado', () => {
    const { year, name, country, destination } = missionTest;
    render(
      <MissionCard
        year={ year }
        name={ name }
        country={ country }
        destination={ destination }
      />,
    );
  });

  it('Será validado se o componente `<MissionCard />` possui uma div com o atributo `data-testid="mission-card"`', () => {
    const { year, name, country, destination } = missionTest;
    render(
      <MissionCard
        year={ year }
        name={ name }
        country={ country }
        destination={ destination }
      />,
    );

    expect(screen.getByTestId("mission-card")).toBeInTheDocument();
  });

  it('Será validado se é renderizado o texto recebido pela prop `name`', () => {
    const { year, name, country, destination } = missionTest;
    render(
      <MissionCard
        year={ year }
        name={ name }
        country={ country }
        destination={ destination }
      />,
    );

    const missionName = screen.getByTestId('mission-name');

    expect(missionName).toHaveTextContent('Siberiano');
  });

  it('Será validado se é renderizado o texto recebido pela prop `year`', () => {
    const { year, name, country, destination } = missionTest;
    render(
      <MissionCard
        year={ year }
        name={ name }
        country={ country }
        destination={ destination }
      />,
    );

    const missionYear = screen.getByTestId('mission-year');

    expect(missionYear).toHaveTextContent("2021");
  });
  
  it('Será validado se é renderizado o texto recebido pela prop `country`', () => {
    const { year, name, country, destination } = missionTest;
    render(
      <MissionCard
        year={ year }
        name={ name }
        country={ country }
        destination={ destination }
      />,
    );

    const missionCountry = screen.getByTestId('mission-country');

    expect(missionCountry).toHaveTextContent('URSS');
  });
  
  it('Será validado se é renderizado o texto recebido pela prop `destination`', () => {
    const { year, name, country, destination } = missionTest;
    render(
      <MissionCard
        year={ year }
        name={ name }
        country={ country }
        destination={ destination }
      />,
    );

    const missionDestination = screen.getByTestId('mission-destination');

    expect(missionDestination).toHaveTextContent('Lua');
  });
});
