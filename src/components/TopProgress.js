import React from "react";

class TopProgress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: 0,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollProgress);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollProgress);
  }

  scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = `${(scrollPx / winHeightPx) * 100}%`;

    console.log(scrolled);

    this.setState({
      scrolled: scrolled,
    });
  };
  render() {
    const progressContainerStyle = {
      background: "transparent",
      boxShadow: "none",
      height: "5px",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      zIndex: 99,
    };

    const progressBarStyle = {
      height: "5px",
      background: "rgb(169, 39, 113)",
      width: this.state.scrolled,
      borderTopRightRadius: "8px",
      borderBottomRightRadius: "8px",
    };
    return (
      <div className="progress-container" style={progressContainerStyle}>
        <div className="progress-bar" style={progressBarStyle} />
      </div>
    );
  }
}

export default TopProgress;
