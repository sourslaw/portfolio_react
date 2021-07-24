


function ResumeItem(props) {
  return [
    <li>
      <p>{props.what}</p>
      <p>{props.where}</p>
      <p>{props.when}</p>
      <p>{props.description}</p>
    </li>
  ];
}

export default ResumeItem;