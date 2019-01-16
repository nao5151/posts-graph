import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  state = {
    vertical: false,
    months: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ],
    weeks: [1, 2, 3, 4, 5]
  }

  render() {
    const { vertical, months, weeks } = this.state
    return (
      <>
        <button onClick={() => this.setState({vertical: !vertical})}>change view</button>
        <div
          className={`graph ${vertical ? 'graph--vertical' : ''}`}
        >
          <div className="graph__months">
            {months.map(m => (
              <div className="graph__month">{m}</div>
            ))}
          </div>
          <div className="graph__weeks">
            {weeks.map(w => (
              <div className="graph__week">{w}</div>
            ))}
          </div>
          <div className="graph__posts">
            {Array.from({length: 12}).map((_, i) => (
              <>
              {weeks.map((w, i) => (
                <div className={`graph__post graph__post--${i}`}>
                  <span className="graph__post-label">1月{w}週目 {i}記事</span>
                </div>
              ))}
              </>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
