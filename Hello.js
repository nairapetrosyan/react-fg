import React from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col } from "react-flexbox-grid";

class HandlerBinding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Success"
    };
    this.alertWithBinding = this.alertWithBinding.bind(this);
  }

  alertWithBinding() {
    alert(this.state.value);
  }

  alertWithoutBinding() {
    alert(this.state.value);
  }

  render() {
    return (
      <Grid>
        <Row>
          <Link to="/">Back</Link>
          <br />
          <Col>
            <button onClick={this.alertWithBinding}>With binding</button>
          </Col>
          <Col>
            <button onClick={this.alertWithoutBinding}>Without binding</button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default HandlerBinding;
