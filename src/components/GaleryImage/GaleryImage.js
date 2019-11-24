import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border:1px solid #dcd6e4;
  border-radius: 3px;
  width: 220px;
  height: 220px;
  position: relative;
  background-image: url("${props => props.url}");
  background-repeat: no-repeat;
  background-position: center;

 `;

const GaleryImage = (props) =>{

    return(
        <Container url={props.url}
        onClick={() => props.onSelectingImageInGalery(props.cale , props.truc)}>
        </Container>
    );
};

export default GaleryImage;

