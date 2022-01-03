import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
class SolarSystem extends React.Component {
  render() {
    // const { data } = this.props;
    return (
      <div data-testid='solar-system'>
        <Title headline='Planetas' />
      </div>
    );
  }
}

// SolarSystem.propTypes = {
//   data: PropTypes.string.isRequired,
// };

export default SolarSystem;
