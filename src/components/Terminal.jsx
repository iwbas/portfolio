import './Terminal.css';


const Terminal = (props) => (
  <div className="Terminal">
    <p className="CommandLine"><span class="Prompt">portfolio:~$</span> {props.command}</p>
    {props.children}
  </div>
);

export default Terminal;