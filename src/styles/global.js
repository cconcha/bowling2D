import { createGlobalStyle } from 'styled-components'

import MontserratRegular from './default-theme/lib/fonts/Montserrat/Montserrat-Regular.ttf'
import MontserratBold from './default-theme/lib/fonts/Montserrat/Montserrat-Bold.ttf'
import MontserratSemiBold from './default-theme/lib/fonts/Montserrat/Montserrat-SemiBold.ttf'

export default createGlobalStyle`
  @font-face{
    font-family: 'Montserrat-Regular';
    src: url(${MontserratRegular});
  }

  @font-face{
    font-family: 'Montserrat-Bold';
    src: url(${MontserratBold});
  }

  @font-face{
    font-family: 'Montserrat-SemiBold';
    src: url(${MontserratSemiBold});
  }

  &&&{
    body {
      font-family: "Montserrat-Regular" !important;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #172439 !important;
    }
    p, li, ul {
      font-size: 16px !important;
    }

    button:focus {
      outline: none !important;
      box-shadow: none !important;
    }

    @media only screen and (max-width: 600px) {
      p, li, ul {
      font-size: 13px !important;
      }
    }
  }
`
