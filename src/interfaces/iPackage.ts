export default interface iPackage {
  eta: string;
  id: number;
  last_updated: string;
  location_coordinate_latitude: number;
  location_coordinate_longitude: number;
  location_status_ok: boolean;
  location_id: string;
  location_name: string;
  notes: string | null;
  parcel_id: string;
  sender: string;
  status: string;
  user_name: string;
  user_phone: string;
  verification_required: boolean;
}
