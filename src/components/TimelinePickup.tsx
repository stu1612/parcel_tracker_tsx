// npm
import { Icon } from "@iconify/react";

export default function TimelinePickup() {
  return (
    <div className="container">
      <h2>Pickup</h2>
      <div>
        <Icon icon="fluent:select-all-on-24-filled" />
      </div>
      <ul className="timeline">
        <li className="pickup"></li>
        <li className="pickup"></li>
        <li className="active pickup"></li>
        <li></li>
      </ul>
    </div>
  );
}
