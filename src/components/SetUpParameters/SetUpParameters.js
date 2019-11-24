import React, {Component} from 'react';
import {Button, ButtonGroup} from "reactstrap";
import {allComponents} from "../../data";

class SetUpParameters extends Component {
        render() {
        return (
            <>
                {allComponents.map(component =>
                    <div>
                        <h5>{component.bodyPartName}</h5>
                        <ButtonGroup>
                            {component.categories.map(category =>
                                <Button
                                    outline={this.props.activeCategory !== category.id}
                                    color="primary"
                                    onClick={() => this.props.onCategoryChange(category.id)}>
                                    {category.name}
                                </Button>
                            )}
                        </ButtonGroup>
                    </div>
                )}
            </>
        )
    }
}

export default SetUpParameters;