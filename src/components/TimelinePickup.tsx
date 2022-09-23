// npm
import { Icon } from "@iconify/react";

export default function TimelinePickup() {
  return (
    <div className="container">
      <div className="container__content">
        <div className="container__content--icon pickup">
          <Icon icon="fluent:select-all-on-24-filled" height={30} />
        </div>
        <div className="container__content--title">
          <h2>Pickup</h2>
        </div>
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
