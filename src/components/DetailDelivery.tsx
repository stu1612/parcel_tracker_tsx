// npm
import { Icon } from "@iconify/react";

export default function DetailDelivery({ location }: any) {
  const { location_name, sender, verification_required } = location.state;

  return (
    <div className="detail">
      <div className="detail__wrapper">
        <div className="detail__wrapper--left">
          <div className="item">
            <p className="text-dark">Location</p>
            <h2 className="heading-3">{location_name}</h2>
          </div>
          <div className="item">
            <p className="text-dark">Sender</p>
            <h2 className="heading-3">{sender}</h2>
          </div>
        </div>
        <div className="detail__wrapper--right">
          <div className="item">
            <p className="text-dark">Identification</p>
          </div>
          <div className="item icons">
            <Icon icon="fa6-solid:id-card" height={20} className="id" />
            {verification_required ? (
              <Icon
                icon="teenyicons:tick-circle-solid"
                height={30}
                color="green"
              />
            ) : (
              <Icon icon="entypo:circle-with-cross" height={30} color="red" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
