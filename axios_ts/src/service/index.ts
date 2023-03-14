import { BASE_URL, TIME_OUT } from "./config";
import WJZRequest from "./request";

const wjzRequest = new WJZRequest({
    baseURL:BASE_URL,
    timeout:TIME_OUT,
})

export default wjzRequest