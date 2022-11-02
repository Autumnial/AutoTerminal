import * as vscode from 'vscode';
import { TerminalOptions, ThemeColor, ThemeIcon } from 'vscode';

let col: ThemeColor = new ThemeColor("terminal.ansiGreen");
let icon: ThemeIcon = new ThemeIcon("explorer-view-icon", col);
export function newTerminal(){

  let term = vscode.window.createTerminal({
    name: "haii",
    iconPath: icon,
    color: col    
  });

  console.log(term.creationOptions);
}