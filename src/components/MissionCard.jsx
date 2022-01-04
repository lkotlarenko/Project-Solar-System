import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" key={ name } className="mission-card">
        <h4 className="mc-name" data-testid="mission-name">
          {name}
        </h4>
        <h4 className="mc-dest" data-testid="mission-destination">
          {destination}
        </h4>
        <h5 className="mc-year" data-testid="mission-year">
          {year}
        </h5>
        <p className="mc-country" data-testid="mission-country">
          {country}
        </p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default MissionCard;
