// npm
import { Icon } from "@iconify/react";

export default function TimelineRoute() {
  return (
    <div className="container">
      <h2>On Route</h2>
      <div>
        <Icon icon="carbon:delivery-truck" />
      </div>
      <ul className="timeline">
        <li className="route"></li>
        <li className="active route"></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
