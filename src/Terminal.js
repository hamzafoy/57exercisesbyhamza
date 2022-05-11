import React from 'react';
import { XTerm } from 'xterm-for-react';
import exercisesObject from './ExerciseLogic';


class Terminal extends React.Component {
    constructor(props) {
        super(props)

        this.xtermRef = React.createRef();

        this.state = {
            input: "",
            lang: "ENGLISH"
        }
    }

    componentDidMount() {
        this.xtermRef.current.terminal.writeln("Terminal Booted. . .");
        this.xtermRef.current.terminal.writeln(
            `Enter the following shorthands to read exercise prompts and see my solution:\n\r`
          );
          this.xtermRef.current.terminal.writeln(
            `LANG :: Set language of the terminal.
            \rHLOWRLD :: A function that takes a user's name and prints a greeting.
            \r\n`
          );
        this.xtermRef.current.terminal.write("User Input: ");
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
                            `\r\n\n\r`
                        );
                        switch (this.state.input) {
                            case "LANG":
                                let choice = prompt(
                                    "Select a language: ARABIC, ENGLISH, FRENCH, SOMALI, or SPANISH"
                                );
                                this.setState({ lang: choice });
                                break;
                            case "HLOWRLD":
                                this.setState({ input: "" });
                                this.xtermRef.current.terminal.write("Write your name: ");
                                let greet = prompt("Enter your name");
                                this.xtermRef.current.terminal.writeln(exercisesObject.renderGreeting(greet, this.state.lang));
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