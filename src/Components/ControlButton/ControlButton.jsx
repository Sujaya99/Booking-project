import "./ControlButton.css";
function ControlButton({ controlButtons, setActiveButton }) {
  return (
    <>
      <ul className="nav nav-pills">
        {controlButtons.map((Item, index) => (
          <li key={index} className="nav-item">
            <button
              className={`nav-link ${
                Item.activeState ? "control-btn-active" : " "
              } control-btn`}
              key={Item.id}
              onClick={() => setActiveButton(Item.id)}
              aria-current="page">
              {Item.title}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ControlButton;
