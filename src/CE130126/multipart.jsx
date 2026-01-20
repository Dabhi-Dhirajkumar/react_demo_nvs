import React, { Component } from "react";

class MultiPart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      t1: "",
      t2: "",
      t3: "",
      t4: "",
      t5: "",
      t6: "",
      t7: "",
      t8: "",
      t9: "",
      index: 0,
    };
  }

  onclicknext = () => {
    this.setState((prevState) => ({
      index: prevState.index + 1,
    }));
  };

  onclickprevious = () => {
    this.setState((prevState) => ({
      index: prevState.index - 1,
    }));
  };

  render() {
    const { t1, t2, t3, t4, t5, t6, t7, t8, t9, index } = this.state;
    return (
      <div>
        {/* Part 1 */}
        <div style={{ display: index === 0 ? "" : "none" }}>
          <h1>Part 1</h1>
          <input
            type="text"
            value={t1}
            placeholder="First Name"
            onChange={(e) => this.setState({ t1: e.target.value })}
          />
          <br />
          <input
            type="text"
            value={t2}
            placeholder="Last Name"
            onChange={(e) => this.setState({ t2: e.target.value })}
          />
          <br />
          <input
            type="text"
            value={t3}
            placeholder="Mobile Number"
            onChange={(e) => this.setState({ t3: e.target.value })}
          />
          <br />
        </div>

        {/* Part 2 */}
        <div style={{ display: index === 1 ? "" : "none" }}>
          <h1>Part 2</h1>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={this.state.t4 === "Male"}
            onChange={(e) => this.setState({ t4: e.target.value })}
          />{" "}
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={this.state.t4 === "Female"}
            onChange={(e) => this.setState({ t4: e.target.value })}
          />{" "}
          Female
          <br />
          <select
            value={this.state.t5}
            onChange={(e) => this.setState({ t5: e.target.value })}
          >
            <option value="">Select Last Name</option>
            <option value="Patel">Patel</option>
            <option value="Shah">Shah</option>
            <option value="Aghera">Aghera</option>
            <option value="Mehta">Mehta</option>
          </select>
          <br />
          <input
            type="checkbox"
            name="branch"
            value="CE"
            checked={this.state.t6 === "CE"}
            onChange={(e) => this.setState({ t6: e.target.value })}
          />{" "}
          CE
          <input
            type="checkbox"
            name="branch"
            value="BCA"
            checked={this.state.t6 === "BCA"}
            onChange={(e) => this.setState({ t6: e.target.value })}
          />{" "}
          BCA
          <br />
        </div>

        {/* Part 3 */}
        <div style={{ display: index === 2 ? "" : "none" }}>
          <h1>Part 3</h1>
          <input
            type="color"
            value={t7}
            onChange={(e) => this.setState({ t7: e.target.value })}
          />
          <br />
          <input
            type="date"
            value={t8}
            onChange={(e) => this.setState({ t8: e.target.value })}
          />
          <br />
          <textarea
            value={t9}
            placeholder="Additional Info"
            onChange={(e) => this.setState({ t9: e.target.value })}
          />
          <br />
        </div>

        {/* Navigation */}
        <div style={{ marginTop: "20px" }}>
          <button disabled={index === 0} onClick={this.onclickprevious}>
            Previous
          </button>
          <button disabled={index === 2} onClick={this.onclicknext}>
            Next
          </button>
        </div>

        {/* Preview Data */}
        <hr />
        <h3>Summary:</h3>
        <div>
          {t1} {t2} {t3}
        </div>
        <div>
          {t4} {t5} {t6}
        </div>
        <div>
          {t7} {t8} {t9}
        </div>
      </div>
    );
  }
}

export default MultiPart;

// import React, { Component } from "react";

// class Pagination extends Component {
//   constructor(props) {
//     super(props);

//     this.data = Array.from({ length: 30 }, (_, i) => ({
//       id: i + 1,
//       name: `Item ${i + 1}`,
//     }));

//     this.state = {
//       index: 0,
//     };
//   }

//   onclickprevious = () => {
//     this.setState((prevState) => ({
//       index: prevState.index - 1,
//     }));
//   };

//   onclicknext = () => {
//     this.setState((prevState) => ({
//       index: prevState.index + 1,
//     }));
//   };

//   render() {
//     const { index } = this.state;

//     const itemsPerPage = 5;
//     const totalPages = Math.ceil(this.data.length / itemsPerPage);

//     const start = index * itemsPerPage;
//     const end = start + itemsPerPage;
//     const currentItems = this.data.slice(start, end);

//     return (
//       <div style={{ padding: "20px", fontFamily: "Arial" }}>
//         <h2>Pagination Example (Class Component)</h2>

//         <ul style={{ listStyleType: "none", padding: 0 }}>
//           {currentItems.map((item) => (
//             <li key={item.id}>
//               {item.id}. {item.name}
//             </li>
//           ))}
//         </ul>

//         <button onClick={this.onclickprevious} disabled={index === 0}>
//           Previous
//         </button>

//         <span style={{ margin: "0 10px" }}>
//           Page {index + 1} of {totalPages}
//         </span>

//         <button onClick={this.onclicknext} disabled={index === totalPages - 1}>
//           Next
//         </button>
//       </div>
//     );
//   }
// }

// export default Pagination;
