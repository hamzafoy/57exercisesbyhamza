import { Terminal } from 'xterm';
let term = new Terminal();
term.open(document.getElementById('terminal'));
term.write('Testing');