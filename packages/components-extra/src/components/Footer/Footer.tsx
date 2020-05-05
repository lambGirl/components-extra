import React, { forwardRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import BottomBannerContainer from './components/BottomBanner'
import Column from './components/Column'
import FooterContainer from './components/FooterContainer'
import Item from './components/Item'
import ItemsContainer from './components/ItemsContainer'
import Title from './components/Title'
import TopContainer from './components/TopContainer'
import { FooterProps, FooterType } from './types'

const Footer = forwardRef(
  (
    { bottomBanner, children, imageProps, title, ...rest }: FooterProps,
    ref: React.Ref<HTMLElement>,
  ) => {
    return (
      <FooterContainer ref={ref} {...rest}>
        <TopContainer {...imageProps}>
          {title && <Title text={title} />}
          {children && <ItemsContainer>{children}</ItemsContainer>}
        </TopContainer>
        {bottomBanner && <BottomBannerContainer>{bottomBanner}</BottomBannerContainer>}
      </FooterContainer>
    )
  },
) as FooterType

Footer.propTypes = {
  /**
   * The content of the bottom banner. Leave to undefined if you don't want one.
   */
  bottomBanner: PropTypes.node,
  /**
   * The Footer's children. You can use Footer.Column & Footer.Item components
   * or bring any component you want.
   */
  children: PropTypes.node,
  /**
   * The footer's background image. Please refer to MUI's CardMedia's props for the exhaustive list:
   * https://material-ui.com/api/card-media/.
   */
  imageProps: PropTypes.object,
  /**
   * The footer's title.
   */
  title: PropTypes.string,
}

/**
 * Exposed components.
 */
Footer.Column = Column
Footer.Item = Item

export { Footer as BaseFooter }
export default styled(Footer)``