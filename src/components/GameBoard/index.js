import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Pine, Box } from '../../components'
import { useSpring, animated } from 'react-spring'
import strikeGif from './strike.gif'

const ContainerStyled = styled.div`
  display: flex;
  width: 77%;
  height: 300px;
  background: radial-gradient(ellipse, #3b746c, #30544f);
  margin-left: auto;
  align-items: center;
  padding-left: 3%;
`

const BallStyled = styled.div`
  background: ${(props) => props.activeColor || 'white'};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: felx;
  align-self: center;
`

const GifStyled = styled.img`
  width: 300px;
`

const GameBoard = ({ play, strike, pinesArray, ...props }) => {
  const spring = useSpring({
    marginLeft: play ? '-10px' : '500px',
    from: { marginLeft: '500px', alignSelf: 'center' },
    config: { duration: 1000 }
  })

  return (
    <ContainerStyled>
      {!strike ? (
        <Box display="flex">
          {pinesArray.map((el, i) => (
            <Box key={`el-${i}`} width="50px">
              {el.map((pin, pI) => (pin === 1 ? <Pine key={`pin-${pI + i}`} /> : <Pine empty key={`pin-${pI + i}`} />))}
            </Box>
          ))}
        </Box>
      ) : (
        <GifStyled src={strikeGif} alt="loading..." />
      )}
      <animated.div style={spring}>
        <BallStyled {...props} />
      </animated.div>
    </ContainerStyled>
  )
}

export default GameBoard
