import requester from "./request";

const regionService = {
  getRegions: () => requester.get("/regions"),
};

export default regionService;
