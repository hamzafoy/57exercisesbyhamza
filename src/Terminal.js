import React from 'react';
import { XTerm } from 'xterm-for-react';
import exercisesObject from './ExerciseLogic';


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
                    options={{ cursorBlink: true }}
                    onData={(data) => {
                        const code = data.charCodeAt(0);
                        // If the user hits empty and there is something typed echo it.
                        if (code === 13 && this.state.input.length > 0) {
                        this.xtermRef.current.terminal.write(
                            `\r\nYour entry: ${this.state.input}\n\r`
                        );
                        switch (this.state.input) {
                            case "HLOWRLD":
                            let greet = exercisesObject.renderGreeting();
                            this.xtermRef.current.terminal.writeln(`${greet}`);
                            break;
                        }
                        this.xtermRef.current.terminal.write("User Input: ");
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