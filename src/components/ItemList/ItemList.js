import React from "react";
import styled from "styled-components";
import Item from "./Item/Item";
import {PoseGroup} from "react-pose";
import posed from "react-pose";

const Container = styled.div`
  display: flex;
   width: 100%;
  
   & > * + * {
  margin-left: 20px;
  }
`;

const PosedItem = posed.div();

const ItemList = (props) =>{
    return (
        <Container>
            <PoseGroup>
            {props.selectedItems.map((item, index) =>
                <PosedItem key={index}>
                <Item
                    item={item}
                    onRemovingItem={props.onRemovingItem}
                />
                </PosedItem>
                )}
            </PoseGroup>
        </Container>
    );
};

export default ItemList;