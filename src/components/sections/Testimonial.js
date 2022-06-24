import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Testimonios de clientes',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum porttitor sollicitudin. Nam auctor ultrices leo, quis rutrum ipsum eleifend id. Aliquam et sagittis purus. Nam convallis eget mauris in efficitur. Vivamus aliquet pulvinar facilisis. Aenean sit amet nisi lorem. Fusce eleifend placerat arcu, eu mattis metus rutrum non. Sed urna neque, pellentesque non turpis consequat, porta mattis tortor.                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">ElRichMc</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Texas</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum porttitor sollicitudin. Nam auctor ultrices leo, quis rutrum ipsum eleifend id. Aliquam et sagittis purus. Nam convallis eget mauris in efficitur. Vivamus aliquet pulvinar facilisis. Aenean sit amet nisi lorem. Fusce eleifend placerat arcu, eu mattis metus rutrum non. Sed urna neque, pellentesque non turpis consequat, porta mattis tortor.                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high"> BobicraftMC </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Africa</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum porttitor sollicitudin. Nam auctor ultrices leo, quis rutrum ipsum eleifend id. Aliquam et sagittis purus. Nam convallis eget mauris in efficitur. Vivamus aliquet pulvinar facilisis. Aenean sit amet nisi lorem. Fusce eleifend placerat arcu, eu mattis metus rutrum non. Sed urna neque, pellentesque non turpis consequat, porta mattis tortor.                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">iLuh</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">El Vaticano</a>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;