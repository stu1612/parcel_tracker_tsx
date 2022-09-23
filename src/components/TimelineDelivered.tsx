// npm
import { Icon } from "@iconify/react";

export default function TimelineDelivered() {
  return (
    <div className="container">
      <div className="container__content">
        <div className="container__content--icon">
          <Icon icon="carbon:delivery-parcel" height={30} />
        </div>
        <div className="container__content--title">
          <h2>Delivered</h2>
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
