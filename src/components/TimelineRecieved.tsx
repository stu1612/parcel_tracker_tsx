// npm
import { Icon } from "@iconify/react";

export default function TimelineRecieved() {
  return (
    <div className="container">
      <div className="container__content">
        <div className="container__content--icon recieved">
          <Icon icon="ri:folder-received-fill" height={30} />
        </div>
        <div className="container__content--title">
          <h2>Received</h2>
        </div>
      </div>
      <ul className="timeline">
        <li className="active rec"></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
