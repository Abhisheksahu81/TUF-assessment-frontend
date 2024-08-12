import { SERVER_URL } from "../utils/utils"

export const getBanner = async() => {
    const result =  await fetch(`${SERVER_URL}banner/get`);
    const res = await result.json();
    console.log(res);
    return res;
}