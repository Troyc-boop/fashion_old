import React, {Component} from 'react';
import './App.css';
import NavaBar from './components/Navbar/NavBar.js';
import Body from './components/body/Body.js';
import SetUpParameters from './components/SetUpParameters/SetUpParameters.js';
import ItemControls from "./components/ItemControls/ItemControls";
import {Button} from "reactstrap";
import ItemList from "./components/ItemList/ItemList";
import styled from "styled-components";
import GaleryImage from "./components/GaleryImage/GaleryImage";
import FavoriteView from "./components/FavoriteView/FavoriteView";
import AppContext from "./AppContext";


const tShirt =
    {
        1: {
            id: 1,
            url: "/componentImages/tShirt1.png",
            type: "tShirt"
        },

        2: {
            id: 2,
            url: "/componentImages/tShirt2.png",
            type: "tShirt"

        },

        3: {
            id: 3,
            url: "/componentImages/tShirt2.png",
            type: "tShirt"

        },

        4: {
            id: 4,
            url: "/componentImages/tShirt2.png",
            type: "tShirt"

        },
        5: {
            id: 5,
            url: "/componentImages/tShirt2.png",
            type: "tShirt"

        },
        6: {
            id: 6,
            url: "/componentImages/tShirt2.png",
            type: "tShirt"

        },
        7: {
            id: 7,
            url: "/componentImages/tShirt2.png",
            type: "tShirt"

        },
        8: {
            id: 8,
            url: "/componentImages/tShirt2.png",
            type: "tShirt"

        },
        9: {
            id: 9,
            url: "/componentImages/tShirt2.png",
            type: "tShirt"

        },
        10: {
            id: 10,
            url: "/componentImages/tShirt2.png",
            type: "tShirt"

        },
        11: {
            id: 11,
            url: "/componentImages/tShirt2.png",
            type: "tShirt"

        }

    };


const longShirt =
    {
        1: {
            id: 1,
            url: "/componentImages/Shirt1.png",
            type: "tShirt"

        },
        2: {
            id: 2,
            url: "/componentImages/Shirt2.png",
            type: "tShirt"

        },

        3: {
            id: 3,
            url: "/componentImages/Shirt3.png",
            type: "tShirt"

        }
    };


const jacket =
    {
        1: {
            id: 1,
            url: "https://s3.amazonaws.com/media.locally.net/spec-220x220/44-464875-0-image-952123.jpg",
            type: "tShirt"

        },
        2: {
            id: 2,
            url: "https://ug.jumia.is/eEvkO887jVZjlTp7fe9brJNm63M=/fit-in/220x220/filters:fill(white):sharpen(1,0,false):quality(100)/product/67/659/1.jpg?2417",
            type: "tShirt"

        }
    };

const pants =
    {
        1: {
            id: 1,
            url: "https://ug.jumia.is/xfRwPbYUYN-kPBJxXVNICOJw_gg=/fit-in/220x220/filters:fill(white):sharpen(1,0,false):quality(100)/product/10/5614/1.jpg?4478",
            type: "tShirt"

        },
        2: {
            id: 2,
            url: "https://ke.jumia.is/FC-2LTMi_gxA8nRm8he-zLh9-_0=/fit-in/220x220/filters:fill(white):sharpen(1,0,false):quality(100)/product/19/8372/1.jpg?9476",
            type: "tShirt"

        }
    };

const longPants = {

    1: {
        id: 1,
        url: "https://19ixxv1i4jgk1je7wt5r2qvo-wpengine.netdna-ssl.com/wp-content/uploads/2018/01/ExOfficio-Mens-BugsAway-Echo-Pant-Scotch-220x220.jpg",
        type: "tShirt"

    },

    2: {
        id: 2,
        url: "https://www.linegear.com/wp-content/uploads/2015/11/Propper-Wildland-FR-PantsF5238_1024-220x220.jpg",
        type: "tShirt"


    }
};


const belts = {
    1: {
        id: 1,
        url: "/componentImages/belt.png",
        type: "tShirt"

    }
};

let lastId = 0;

const allItems = {
    tShirt, longShirt, jacket, pants, longPants, belts
};

export const handelSelectedItem = (humanState, allItems) => {

    return Object.entries(humanState).filter(([category, itemIndex]) =>
        itemIndex != null
    ).map((category) => {
        const itemIds = Object.keys(allItems[category[0]]);
        let selectedItemIndex = itemIds.findIndex((element) => {
            return element == category[1]
        });
        selectedItemIndex = itemIds[selectedItemIndex];
        return {category: category, url: allItems[category[0]][selectedItemIndex].url, wears: 10, price: 20}
    });
};

class App extends Component {
    state = {
        favoriteCombinations: {},
        alertBoxDisplay: null,
        favoriteDisplay: false,
        human: {
            tShirt: null,
            longShirt: null,
            jacket: null,
            pants: null,
            longPants: null,
            belts: null,

        },
        activeCategory: null
    };

    handleAlertOnCreatNewYesButton = () => {
        this.setState({
            alertBoxDisplay: null,
            favoriteDisplay: false,
            human: {
                tShirt: null,
                longShirt: null,
                jacket: null,
                pants: null,
                longPants: null,
                belts: null
            },
            activeCategory: null


        })
    };

    handleClickOnSave = () => {
        const id = ++lastId;

        this.setState({
            favoriteCombinations: {
                ...this.state.favoriteCombinations,
                [id]: {
                    ...this.state.human,
                    id
                },

            }})
    };

    handleClickOnFavorite = () => {
        this.setState({
                ...this.state,
                favoriteDisplay: true
            }
        );
    };

    handleRemovingItemFromFavorite = (id) => {
        this.setState({
                favoriteCombinations: {
                    ...this.state.favoriteCombinations,
                    [id]: undefined
                },
                }


        );

    };


    handleAlertOnCreatNewNoButton = () => {
        this.setState({
                ...this.state,
                alertBoxDisplay: null,

            }
        )
    };

    handleCategoryChange = (category) => {
        const isItemSelected = this.state.human[category] != null;

        this.setState(
            {
                activeCategory: category,
                human: {
                    ...this.state.human,
                    [category]: !isItemSelected ? Number(Object.keys(allItems[category])[0]) : this.state.human[category]
                }
            }
        )
    };

    handleItemChange = (step) => {
        const itemIds = Object.keys(allItems[this.state.activeCategory]);
        const selectedItemIndex = itemIds.findIndex((element) => {
            return element === this.state.human[this.state.activeCategory]
        });

        const attemptedIndex = selectedItemIndex + step;
        let newIndex = attemptedIndex;

        if (attemptedIndex > itemIds.length - 1) {
            newIndex = 0;
        }

        if (attemptedIndex < 0) {
            newIndex = itemIds.length - 1;
        }

        this.setState(
            {
                human: {
                    ...this.state.human,
                    [this.state.activeCategory]: itemIds[newIndex]
                }
            }
        )
    };

    handleRemovingItem = (removingItem) => {
        return (
            this.setState(
                {
                    ...this.state,
                    human: {
                        ...this.state.human,
                        [removingItem]: null
                    }
                }
            )
        );
    };


    handleClickOnNewButton = () => {
        return (
            this.setState(
                {
                    alertBoxDisplay: true
                }
            )
        );
    };

    handleSelectingImageInGallery = (category, changeingTo) => {
        return (
            this.setState(
                {
                    human: {
                        ...this.state.human,
                        [category]: changeingTo
                    }
                }
            )
        );
    };


    render() {


        const AlertOnCreatNew = styled.div`
z-index: 4;
background-color: #6d088e;
color: white;
margin: 15% 0 0 32%;
width: 500px;
height: 150px;
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

p{
display: flex;
}

div{
display: flex;
justify-content: center;
}
`;
        const Container = styled.div`
display: flex;
flex-direction: row;
`;

        const SetUpContainer = styled.div`
display: flex;
flex-direction: column;
`;

        const GalleryContainer = styled.div`
display: flex;
flex-wrap: wrap;
max-height: 500px;
width: 100%;
overflow-y: scroll;
overflow-x: hidden;
div{
margin: 4px;
-webkit-box-shadow: 0px 0px 8px 1px rgba(217,189,217,1);
-moz-box-shadow: 0px 0px 8px 1px rgba(217,189,217,1);
box-shadow: 0px 0px 8px 1px rgba(217,189,217,1);
}

div:hover{
-moz-box-shadow: none;
box-shadow: none;
}
`;
        console.log("state ", this.state.human);

        return (
            <AppContext.Provider value={{item: allItems}}>
                <NavaBar
                    onCreateNew={this.handleClickOnNewButton}
                    activeCategory={this.state.activeCategory}
                    favoriteDisplayed={this.state.favoriteDisplay}
                    onClickSave={this.handleClickOnSave}
                    onClickFavorite={this.handleClickOnFavorite}
                    onClickNew={this.handleAlertOnCreatNewYesButton}
                />
                {
                    (this.state.alertBoxDisplay && !this.state.favoriteDisplay) &&
                    <AlertOnCreatNew>
                        <p>Creating a new combination will delete everything. Are you sure you want to continue?</p>
                        <div>
                            <Button outline color="secondary" onClick={() => this.handleAlertOnCreatNewYesButton()}
                                    size="lg">Yes</Button>
                            <Button outline color="secondary" onClick={() => this.handleAlertOnCreatNewNoButton()}
                                    size="lg">No</Button>
                        </div>
                    </AlertOnCreatNew>

                }


                {
                    this.state.favoriteDisplay ?
                        <FavoriteView
                            savedFavorites={this.state.favoriteCombinations}
                            allItems={allItems}
                            onRemoveItemFromFavorite={this.handleRemovingItemFromFavorite}

                        />
                        :
                        <div>
                            <Container>
                                <SetUpContainer>
                                    <SetUpParameters
                                        onCategoryChange={this.handleCategoryChange}
                                        activeCategory={this.state.activeCategory}
                                    />
                                    <ItemControls
                                        onItemChange={this.handleItemChange}
                                        activeCategory={this.state.activeCategory}
                                    />
                                </SetUpContainer>
                                <Body tShirt={this.state.human.tShirt && tShirt[this.state.human.tShirt].url}
                                      longShirt={this.state.human.longShirt && longShirt[this.state.human.longShirt].url}
                                      jacket={this.state.human.jacket && jacket[this.state.human.jacket].url}
                                      pants={this.state.human.pants && pants[this.state.human.pants].url}
                                      longPants={this.state.human.longPants && longPants[this.state.human.longPants].url}
                                      belts={this.state.human.belts && belts[this.state.human.belts].url}
                                      activeCategory={this.state.activeCategory}
                                />
                                <GalleryContainer>

                                    {
                                        this.state.activeCategory && Object.entries(allItems[this.state.activeCategory]).map((item) =>
                                            <GaleryImage
                                                url={item[1].url}
                                                cale={this.state.activeCategory}
                                                truc={item[1].id}
                                                item={item}
                                                onSelectingImageInGalery={this.handleSelectingImageInGallery}
                                            />
                                        )}
                                </GalleryContainer>
                            </Container>
                            <ItemList selectedItems={handelSelectedItem(this.state.human, allItems)}
                                      onRemovingItem={this.handleRemovingItem}
                            />
                        </div>

                }

            </AppContext.Provider>
        );
    }
}

export default App;

