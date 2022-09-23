// npm
import { Icon } from "@iconify/react";

export default function TimelineRecieved() {
  return (
    <div className="container">
      <h2>Received</h2>
      <div>
        <Icon icon="ri:folder-received-fill" />
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
