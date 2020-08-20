import React, { Component } from "react";
import { ThemeContext } from "../../../Contexts/Theme";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

class FavPostSummary extends Component {
  static contextType = ThemeContext;

  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick = async (e) => {
    this.props.history.push(`/blog/${this.props.favPosts.id}`);
  };
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;

    return (
      <div>
        <Card
          className="margin5"
          style={{ background: theme.low, borderColor: theme.high }}
        >
          <CardBody>
            <CardTitle className="bold d-flex justify-content-center">
              {this.props.favPosts.title.toUpperCase()}
            </CardTitle>
            <CardSubtitle className="d-flex justify-content-center">
              {this.props.favPosts.created_at.slice(0, 10)}
            </CardSubtitle>
            <br />
            <a className="d-flex justify-content-center">
              <Button
                onClick={this.handleClick}
                className="noBorder"
                style={{ background: theme.highlight }}
              >
                View more
              </Button>
            </a>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default FavPostSummary;
