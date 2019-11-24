import React from "react";
import styled from "styled-components";
import {FiXCircle} from "react-icons/fi";
import GaleryImage from "../../GaleryImage/GaleryImage.js";


const ColorContainer = styled.div`
width: 220px;
  height: 220px;
  position: relative;
  background: linear-gradient(135deg,#647c9400 48%,rgb(85, 0, 156)) 40%;
  -webkit-box-shadow: 14px 12px 16px 0px rgba(122,122,122,1);
-moz-box-shadow: 14px 12px 16px 0px rgba(122,122,122,1);
box-shadow: 14px 12px 16px 0px rgba(122,122,122,1);

`;

const ItemName = styled.div`
    padding:5px;
    color: black;
    
  span{
    font-weight: bold;
    z-index: 1;
}
`;

const ItemDetails = styled.div`
  position: absolute;
  margin-left: 142px;
  margin-top: 112px;
  color: white;
  
  span{
    padding: 1px;
    display: block;
    line-height: 1em;
    z-index: 1;
}
`;

const DeleteButton = styled.div`
    margin-left: 197px;
    position: absolute;
    z-index: 1;
`;

const Image = styled.div`
  border:1px solid #dcd6e4;
  border-radius: 3px;
  width: 220px;
  height: 220px;
  position: relative;
  background-image: url("${props => props.url}");
  background-repeat: no-repeat;
  background-position: center;

 `;

const Item = (props) => {
    return(
        <Image url={props.item.url}>
            <ColorContainer>
            <DeleteButton><FiXCircle onClick={() => props.onRemovingItem(props.item.category[0])}/></DeleteButton>
            <ItemName>
                <span>{props.item.category}</span>
            </ItemName>
            <ItemDetails>
                <span>{props.item.wears} wears</span>
                <span>Price {props.item.price}$</span>
                <span>Relative price {props.item.price/props.item.wears}$</span>
            </ItemDetails>
            </ColorContainer>
        </Image>
    );
};

export default Item;