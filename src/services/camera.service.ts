import requester from "./request";

const cameraService = {
  getCameras: () => requester.get("/cameras-online"),
  getStatistic: () => requester.get("/thong-ke"),
};

export default cameraService;
