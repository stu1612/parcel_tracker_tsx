// npm
import { Icon } from "@iconify/react";

export default function TimelineDelivered() {
  return (
    <div className="container">
      <div className="container__content">
        <h2>Delivered</h2>
        <div className="container__content--icon">
          <Icon icon="carbon:delivery-parcel" />
        </div>
      </div>
      <ul className="timeline">
        <li className="del"></li>
        <li className="del"></li>
        <li className="del"></li>
        <li className="active del"></li>
      </ul>
    </div>
  );
}
