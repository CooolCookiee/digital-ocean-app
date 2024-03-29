import PropTypes from 'prop-types';

const SectionShared = {
  types: {
    topOuterDivider: PropTypes.bool,
    bottomOuterDivider: PropTypes.bool,    
    topDivider: PropTypes.bool,
    bottomDivider: PropTypes.bool,
    hasBgColor: PropTypes.bool,
    invertColor: PropTypes.bool
  },
  defaults: {
    topOuterDivider: false,
    bottomOuterDivider: false,    
    topDivider: false,
    bottomDivider: false,
    hasBgColor: false,
    invertColor: false
  }
}

export const SectionProps = {
  types: {
    ...SectionShared.types
  },
  defaults: {
    ...SectionShared.defaults
  }
}

export const SectionSplitProps = {
  types: {
    ...SectionShared.types,
    invertMobile: PropTypes.bool,
    invertDesktop: PropTypes.bool,
    alignTop: PropTypes.bool,
    imageFill: PropTypes.bool
  },
  defaults: {
    ...SectionShared.defaults,
    invertMobile: false,
    invertDesktop: false,
    alignTop: false,
    imageFill: false
  }
}

export const SectionTilesProps = {
  types: {
    ...SectionShared.types,
    pushLeft: PropTypes.bool
  },
  defaults: {
    ...SectionShared.defaults,
    pushLeft: false
  }
}