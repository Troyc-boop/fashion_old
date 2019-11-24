import React from 'react';
import styled from "styled-components";
import Body from '../body/Body.js';
import {FiXCircle} from "react-icons/fi";
import ItemList from "../ItemList/ItemList";
import AppContext from "../../AppContext";
import {handelSelectedItem} from "../../App"
import {handleRemovingItemFromFavorite} from "../../App";


const Container = styled.div`


`;


const FavoriteBox = styled.div`
border: solid 1px purple;
display: flex;
flex-direction: row;
margin: 20px;

`;

const ClosedButton = styled(FiXCircle)`
font-size: 32px;
position: absolute;
padding-top: 10px;
padding-left: 10px;
z-index: 2;
`;

const FavoriteView = (props) => {
    console.log("props  ", props);
    const appContext = React.useContext(AppContext);
    return (
        <Container>
            {Object.values(props.savedFavorites).map((combination) => {
                console.log("combination ", combination);
                return (
                    <FavoriteBox>
                        <ClosedButton onClick={() => props.onRemoveItemFromFavorite(combination.id)}/>
                        <Body
                            tShirt={combination.tShirt && props.allItems.tShirt[combination.tShirt].url}
                            longShirt={combination.longShirt && props.allItems.longShirt[combination.longShirt].url}
                            jacket={combination.jacket && props.allItems.jacket[combination.jacket].url}
                            pants={combination.pants && props.allItems.pants[combination.pants].url}
                            longPants={combination.longPants && props.allItems.longPants[combination.longPants].url}
                            belts={combination.belts && props.allItems.belts[combination.belts].url}
                        />
                        <ItemList selectedItems={handelSelectedItem(combination,appContext.item)}/>
                    </FavoriteBox>
                );

            })

            }

        </Container>
    );
};

export default FavoriteView;

