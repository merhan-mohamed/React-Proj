import styled from "styled-components"


export const Overlay = styled.div`
position: absolute;
top:0;
bottom:0;
right:0;
left:0;
background:rgba(235,84,36,0.5);
opacity:0;
margin:0
`

export const Imagewrapper = styled.div`

position:relative;
&:hover > div {
    opacity:1
}

`