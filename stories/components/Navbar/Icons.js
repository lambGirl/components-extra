import React from 'react'

const BrandIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path
      fill="white"
      d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"
    />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
)
BrandIcon.displayName = 'YourCustomIcon'

const FlagIcon = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path fill={color} d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
)
FlagIcon.displayName = 'YourFlagIcon'

const AmericaFlag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xlink="http://www.w3.org/1999/xlink"
    width="24"
    height="24"
    viewBox="0 0 7410 3900"
  >
    <rect width="7410" height="3900" fill="#b22234" />
    <path
      d="M0,450H7410m0,600H0m0,600H7410m0,600H0m0,600H7410m0,600H0"
      stroke="#fff"
      stroke-width="300"
    />
    <rect width="2964" height="2100" fill="#3c3b6e" />
    <g fill="#fff">
      <g id="s18">
        <g id="s9">
          <g id="s5">
            <g id="s4">
              <path
                id="s"
                d="M247,90 317.534230,307.082039 132.873218,172.917961H361.126782L176.465770,307.082039z"
              />
              <use href="#s" y="420" />
              <use href="#s" y="840" />
              <use href="#s" y="1260" />
            </g>
            <use href="#s" y="1680" />
          </g>
          <use href="#s4" x="247" y="210" />
        </g>
        <use href="#s9" x="494" />
      </g>
      <use href="#s18" x="988" />
      <use href="#s9" x="1976" />
      <use href="#s5" x="2470" />
    </g>
  </svg>
)

export { AmericaFlag, BrandIcon, FlagIcon }