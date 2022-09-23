// npm
import { Icon } from "@iconify/react";

export default function TimelineRoute() {
  return (
    <div className="container">
      <div className="container__content">
        <div className="container__content--icon route">
          <Icon icon="carbon:delivery-truck" height={30} />
        </div>
        <div className="container__content--title">
          <h2>On Route</h2>
        </div>
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
