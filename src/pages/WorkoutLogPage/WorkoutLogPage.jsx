import React, { Component } from "react";
import WorkoutLogComponent from "../../components/WorkoutLogComponent";
import styles from "./WorkoutLogPage.module.scss";

class WorkoutLogPage extends Component {
  state = {};
  render() {
    return (
      <div className={styles.WorkoutLogPage}>
        <WorkoutLogComponent history={this.props.history} />
      </div>
    );
  }
}

export default WorkoutLogPage;
