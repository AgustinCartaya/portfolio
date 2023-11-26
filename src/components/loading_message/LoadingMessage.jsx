import React from 'react'
import styled from 'styled-components'

const LoadingMessage = ({message}) => {
  return (
    <CustomLoading>{message}</CustomLoading>
  )
}

export default LoadingMessage

const CustomLoading = styled.p`
  min-height: 800px;
  text-align: center;
`;
