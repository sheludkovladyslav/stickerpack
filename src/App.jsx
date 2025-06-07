import { Component } from "react";
import "./App.css";
import { Choice } from "./components/Choice";
import { Stickers } from "./components/Stickers";
import { StickerList } from "./components/StickerList";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: `Haven't picked yet`,
    };
  }

  handleSelected = (newSelected) => {
    this.setState({
      choice: newSelected,
    });
  };

  render() {
    return (
      <section>
        <Choice choice={this.state.choice}></Choice>

        <StickerList>
          <Stickers onClickChange={this.handleSelected}></Stickers>
        </StickerList>
      </section>
    );
  }
}
