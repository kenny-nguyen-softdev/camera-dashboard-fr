import Camera from "./camera";
import Region from "./region";

export default interface Warning {
  id: number;
  name: string;
  level: string;
  face_image: string;
  time_from: string;
  time_to: string;
  content: string;
  camera?: Camera;
  region?: Region;
}
