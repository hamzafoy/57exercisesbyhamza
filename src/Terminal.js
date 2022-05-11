import React from 'react';
import { XTerm } from 'xterm-for-react';


class Terminal extends React.Component {
    constructor(props) {
        super(props)

        this.xtermRef = React.createRef();

        this.state = {
            userInput: ""
        }
    }

    componentDidMount() {
        this.xtermRef.current.terminal.writeln("Terminal Booted. . .");
        this.xtermRef.current.terminal.write("Echo> ");
    }

    render() {

        return(
            <>
                <XTerm
          ref={this.xtermRef}
          onData={(data) => {
            const code = data.charCodeAt(0);
            // If the user hits empty and there is something typed echo it.
            if (code === 13 && this.state.input.length > 0) {
              this.xtermRef.current.terminal.write(
                "\r\nYou typed: '" + this.state.input + "'\r\n"
              );
              this.xtermRef.current.terminal.write("echo> ");
              this.setState({ input: "" });
            } else if (code < 32 || code === 127) {
              // Disable control Keys such as arrow keys
              return;
            } else {
              // Add general key press characters to the terminal
              this.xtermRef.current.terminal.write(data);
              this.setState({ input: this.state.input + data });
            }
          }}
        />
            </>
        )

    }

}

export default Terminal;