import styled from 'styled-components'

export const ListItemWrapper = styled.div`  
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`

export const ListButtonWrapper = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-between;
`

export const StyledListItem = styled.p`
  width: 70%;
  word-wrap: break-word;
`

export const Done = styled.span`
  text-decoration: line-through;
  color: #198754;
`

export const NotDone = styled.span`
  text-decoration: none;
`