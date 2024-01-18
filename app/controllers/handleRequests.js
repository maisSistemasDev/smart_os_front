import { config } from "./config";

const base_url = ()=>{
    return config.PROD? config.API_PROD: config.API_DEV
}

const jsonToQueryString=(json)=> {
    return '?' + 
        Object.keys(json).map(function(key) {
            return encodeURIComponent(key) + '=' +
                encodeURIComponent(json[key]);
        }).join('&');
}



export const POST = async(path,data, headers)=>{
    
    const url = `${base_url()}/${url}`
    const body = JSON.stringify(data)
    const response = await fetch(url, {
        headers,
        body
    })

    if(response.ok){
        const json = await response.json()
        return {'message':'ok', data:json}
    }else{

        return {'error':response.statusText, 'status':response.status}
    }

}

export const GET = async(path,data=null, headers=undefined)=>{
    
    const query = data?jsonToQueryString(data):''   
    const url = `${base_url()}/${path}/${query}`
    const response = await fetch(url, {
        headers,
        body
    })

    if(response.ok){
        const json = await response.json()
        return {'message':'ok', data:json}
    }else{

        return {'error':response.statusText, 'status':response.status}
    }

}
