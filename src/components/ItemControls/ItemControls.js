import React from "react";
import {Button} from "reactstrap";
import {FiArrowLeft, FiArrowRight} from "react-icons/fi";
import styled from "styled-components";

const ButtonContainer = styled.div`
display: flex;
flex-direction: row;
`;


const ItemControls = (props) => {
    return (
        <ButtonContainer>
            <Button outline color="secondary" disabled={!props.activeCategory} onClick={() => props.onItemChange(-1)} size="lg"><FiArrowLeft/></Button>
            <Button outline color="secondary" disabled={!props.activeCategory} onClick={() => props.onItemChange(1)} size="lg"><FiArrowRight/></Button>
        </ButtonContainer>
    )
};

export default ItemControls;