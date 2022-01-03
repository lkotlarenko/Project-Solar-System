import React from 'react';
import PropTypes from 'prop-types';
class SolarSystem extends React.Component {
  render() {
    const { data } = this.props;
    return <div data-testid='solar-system'>{data}</div>;
  }
}

SolarSystem.propTypes = {
  data: PropTypes.string.isRequired,
};

export default SolarSystem;
