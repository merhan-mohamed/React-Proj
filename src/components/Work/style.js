import styled from "styled-components";

export const Sizing = styled.div`

@media (min-width:768px) and (max-width:1440px) {
margin-left : ${props => props.first === 1 ? '0' : '5%'}
}

`

export const Icon = styled.i`
padding:60px 0px

`