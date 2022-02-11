import React from "react";
import { connect } from "react-redux";
import { AddCard, removeCard, updateTitle, updateDescription } from "../reducers/actionCreator";
import Cards from "./Cards";
import { Button } from "@material-ui/core";

class TrelloBoard extends React.Component {
 
  addData() {
    const title = "";
    const description = "";
    const data = { title, description };
    this.forceUpdate();
    this.props.AddCard(data);
  }

  removeCard(index) {
    this.forceUpdate();
    this.props.removeCard(index);
  }
  render() {
    const { board } = this.props;
    return (
      <div>
        {(board || []).map((card, index) => {
          return <Cards
          key={card.cardId}
            card={card}
            removeCard={() => this.removeCard(index)}
            updateTitle={(value)=>this.props.updateTitle(value,card.cardId)}
            updateDescription={(value)=> this.props.updateDescription(value, card.cardId)}
          />
        })}

        <Button
        
        key="add-btn"
          color="primary"
          variant="contained"
          onClick={() => {
            this.addData();
          }}
        >
          Add
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    board: state.board,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    AddCard: (data) => {
      dispatch(AddCard(data));
    },
    removeCard: (index) => {
      dispatch(removeCard(index));
    },
    updateDescription: (value, id) =>{
      dispatch(updateDescription(value, id));
    },
    updateTitle: (value, id) =>{
      dispatch(updateTitle(value, id));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TrelloBoard);
