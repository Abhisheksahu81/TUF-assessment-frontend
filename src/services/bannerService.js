import { SERVER_URL } from "../utils/utils"

export const getBanner = async() => {
    const result =  await fetch(`${SERVER_URL}banner/get`);
    const res = await result.json();
    return res;
}

export const updateBanner = async(data) => {
    const result =  await fetch(`${SERVER_URL}banner/update` ,
        {
            method : 'POST',
            headers : {
                 'Content-Type': 'application/json'
            },
            body : JSON.stringify(data)
        }
    );
    const res = await result.json();
    return res;
}