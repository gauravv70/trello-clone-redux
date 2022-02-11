import React from "react";
import "../styles/Header.css";
import style from "styled-components";
import { Button, TextField } from "@material-ui/core";
import { Delete } from "@material-ui/icons";


const Title = style.div`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 7px;
  border: none;
`;
const Body = style.div`
  padding: 10px;
  word-wrap: break-word;
`;
const Card = style.div`
  width: 250px;
  height: auto;
  display: block;
  background-color: #ffe4c4;
  border-radius: 10px;
  margin: 10px;
`;

class Cards extends React.Component {
  editTitle(e) {
    const value = e.target.value;
    this.props.updateTitle(value);
    this.setState({ title: value });
  }

  editBody(e) {
    const value = e.target.value;
    this.props.updateDescription(value);
    this.setState({ description: value });
  }

  render() {
    const { title, description } = this.props.card;
    return (
        <Card>
          <Title>
            <TextField
              id="title"
              value={title}
              onChange={(e) => this.editTitle(e)}
              placeholder="Title"
            ></TextField>
          </Title>
          <hr width="90%"></hr>
          <Body>
            <TextField
              id="body"
              value={description}
              onChange={(e) => this.editBody(e)}
              placeholder="Description"
            ></TextField>
          </Body>
          <div style={{ display: "flex", justifyContent: "right" }}>
            <Button
              onClick={() => {
                this.setState({});
                this.props.removeCard();
              }}
              variant="text"
            >
              {" "}
              <Delete></Delete>
            </Button>
          </div>
        </Card>
    );
  }
}

export default Cards;
