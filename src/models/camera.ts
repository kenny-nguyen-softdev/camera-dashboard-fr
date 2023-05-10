import Region from "./region";

export default interface Camera {
  id: number;
  serial: string;
  home_id: string;
  status: string;
  url: string;
  region: Region;
}
