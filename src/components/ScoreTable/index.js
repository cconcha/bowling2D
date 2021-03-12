import React from 'react'
// import PropTypes from 'prop-types'
import { Title } from '../../components'
import styled, { css } from 'styled-components'

const ContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  opacity: ${(props) => (props.active && '100%') || '50%'};
`

const TableStyled = styled.table`
  width: 80%;
  font-size: 12px;
  border: 1px solid;
  text-align: center;
  table-layout: fixed;
`

const TBodyStyled = styled.tbody``

const baseTStyle = css`
  padding: 0;
  vertical-align: middle;
`

const ThStyled = styled.th`
  ${baseTStyle}
  border-bottom: 1px solid;
  height: 30px;
  font-family: ${(props) => props.theme.fonts.bold};

  &:not(:last-child) {
    border-right: 1px solid;
  }
`

const TrStyled = styled.tr`
  ${baseTStyle}
  &:nth-child(2) > td {
    &:nth-child(even) {
      border-bottom: 1px solid;
    }
  }
`

const TdStyled = styled.td`
  ${baseTStyle}
  height:30px;
  &:not(:last-child) {
    border-right: 1px solid;
  }

  &:nth-child(21) {
    border-bottom: 1px solid;
  }
`

const CaptionStyled = styled.caption`
  color: grey;
  font-weight: bold;
  text-align: left;
  font-family: ${(props) => props.theme.fonts.bold};
`

const PlayerTag = styled.div`
  width: 15%;
  height: 90px;
  background-color: ${(props) => (props.active && props.playerColor) || 'white'};
  padding: 0 10px;
  margin-top: 18px;
`

const ScoreTable = ({ cumulativeScores = [], playerName, playerColor, active, scorePlayer }) => {
  const renderScores = (frame, roll, last = false) => {
    // console.log(scorePlayer)
    let scoreOne = scorePlayer[2 * frame]
    let scoreTwo = scorePlayer[2 * frame + 1]
    let scoreThree = scorePlayer[2 * frame + 2]
    if (roll === 0 && !last && scoreOne === 10) return '-'
    if (roll === 1 && !last && scoreOne === 10) return 'X'
    if (scoreOne + scoreTwo === 10 && roll === 1) return '/'
    if (roll === 0) return scoreOne === 0 ? '-' : scoreOne === 10 ? 'X' : scoreOne
    if (roll === 1) return scoreTwo === 0 ? '-' : scoreTwo === 10 ? 'X' : scoreTwo
    if (roll === 2) return scoreThree === 0 ? '-' : scoreThree === 10 ? 'X' : scoreThree
  }

  return (
    <>
      <ContainerStyled active={active ? 'true' : null}>
        <PlayerTag playerColor={playerColor} active={active ? 'true' : null}>
          {playerName && <Title type="h3" right color={active ? 'white' : '#797373'} title={playerName} />}
        </PlayerTag>
        <TableStyled cellPadding="1" cellSpacing="0">
          <CaptionStyled>SCORE</CaptionStyled>
          <TBodyStyled>
            <TrStyled>
              <ThStyled colSpan="6"> 1</ThStyled>
              <ThStyled colSpan="6"> 2</ThStyled>
              <ThStyled colSpan="6"> 3</ThStyled>
              <ThStyled colSpan="6"> 4</ThStyled>
              <ThStyled colSpan="6"> 5</ThStyled>
              <ThStyled colSpan="6"> 6</ThStyled>
              <ThStyled colSpan="6"> 7</ThStyled>
              <ThStyled colSpan="6"> 8</ThStyled>
              <ThStyled colSpan="6"> 9</ThStyled>
              <ThStyled colSpan="9"> 10</ThStyled>
            </TrStyled>
            <TrStyled>
              <TdStyled colSpan="3">{renderScores(0, 0)}</TdStyled>
              <TdStyled colSpan="3">{renderScores(0, 1)}</TdStyled>
              <TdStyled colSpan="3">{renderScores(1, 0)}</TdStyled>
              <TdStyled colSpan="3">{renderScores(1, 1)}</TdStyled>
              <TdStyled colSpan="3">{renderScores(2, 0)}</TdStyled>
              <TdStyled colSpan="3">{renderScores(2, 1)}</TdStyled>
              <TdStyled colSpan="3">{renderScores(3, 0)}</TdStyled>
              <TdStyled colSpan="3">{renderScores(3, 1)}</TdStyled>
              <TdStyled colSpan="3">{renderScores(4, 0)}</TdStyled>
              <TdStyled colSpan="3">{renderScores(4, 1)}</TdStyled>
              <TdStyled colSpan="3">{renderScores(5, 0)}</TdStyled>
              <TdStyled colSpan="3">{renderScores(5, 1)}</TdStyled>
              <TdStyled colSpan="3">{renderScores(6, 0)}</TdStyled>
              <TdStyled colSpan="3">{renderScores(6, 1)}</TdStyled>
              <TdStyled colSpan="3">{renderScores(7, 0)}</TdStyled>
              <TdStyled colSpan="3">{renderScores(7, 1)}</TdStyled>
              <TdStyled colSpan="3">{renderScores(8, 0)}</TdStyled>
              <TdStyled colSpan="3">{renderScores(8, 1)}</TdStyled>
              <TdStyled colSpan="3">{renderScores(9, 0, true)}</TdStyled>
              <TdStyled colSpan="3">{renderScores(9, 1, true)}</TdStyled>
              <TdStyled colSpan="3">{renderScores(9, 2, true)}</TdStyled>
            </TrStyled>
            <TrStyled>
              <TdStyled colSpan="6">{cumulativeScores[0]}</TdStyled>
              <TdStyled colSpan="6">{cumulativeScores[1]}</TdStyled>
              <TdStyled colSpan="6">{cumulativeScores[2]}</TdStyled>
              <TdStyled colSpan="6">{cumulativeScores[3]}</TdStyled>
              <TdStyled colSpan="6">{cumulativeScores[4]}</TdStyled>
              <TdStyled colSpan="6">{cumulativeScores[5]}</TdStyled>
              <TdStyled colSpan="6">{cumulativeScores[6]}</TdStyled>
              <TdStyled colSpan="6">{cumulativeScores[7]}</TdStyled>
              <TdStyled colSpan="6">{cumulativeScores[8]}</TdStyled>
              <TdStyled colSpan="9">{cumulativeScores[9]}</TdStyled>
            </TrStyled>
          </TBodyStyled>
        </TableStyled>
      </ContainerStyled>
    </>
  )
}

export default ScoreTable
