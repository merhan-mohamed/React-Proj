import styled from "styled-components";
export const Backgrounded = styled.div`
background:${props => props.item === 1 ? "#3b5998" : ""};
background: ${props => props.item ===2 ? "#498cbf": " " };
background: ${props => props.item ===3 ? "#cc2127" : ""};


`