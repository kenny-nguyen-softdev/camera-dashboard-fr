import requester from "./request";

const warningService = {
  getWarnings: () => requester.get("/warning"),
};

export default warningService;
