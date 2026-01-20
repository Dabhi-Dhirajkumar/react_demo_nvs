import React, { Component } from "react";

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        "t1", "t2", "t3", "t4", "t5",
        "t6", "t7", "t8", "t9", "t10",
        "t11", "t12", "t13", "t14", "t15",
        "t16", "t17", "t18", "t19", "t20",
        "t21", "t22", "t23", "t24", "t25",
        "t26", "t27", "t28", "t29", "t30"
      ],
      index: 0
    };
  }

  onclicknext = () => {
    this.setState((prev) => ({
      index: prev.index + 1
    }));
  };

  onclickprevious = () => {
    this.setState((prev) => ({
      index: prev.index - 1
    }));
  };

  render() {
    const { items, index } = this.state;
    const itemsPerPage = 5;
    const totalPages = Math.ceil(items.length / itemsPerPage);

    const currentItems = items.slice(
      index * itemsPerPage,
      (index + 1) * itemsPerPage
    );

    return (
      <div style={{ padding: "20px" }}>
        <h2>Pagination Example</h2>

        {/* DISPLAY ITEMS */}
        {currentItems.map((item, idx) => (
          <div key={idx}>{item}</div>
        ))}

        <br />

        {/* BUTTONS */}
        <button
          onClick={this.onclickprevious}
          disabled={index === 0}
        >
          Previous
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {index + 1} of {totalPages}
        </span>

        <button
          onClick={this.onclicknext}
          disabled={index === 5}
        >
          Next
        </button>
      </div>
    );
  }
}

export default Pagination;
