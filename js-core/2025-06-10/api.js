const baseUrl = 'https://8fty49z8qb.execute-api.ap-southeast-1.amazonaws.com'

export const get = async (endpoint) => {
    const response = await fetch(
        `${baseUrl}/${endpoint}`,{
            headers:{
                'Content-Type': 'application/json',
                'Authorization': localStorage.access
            }
        }
    )
    const data = await response.json()

    if(data.detail === 'token expired'){
        await getNewToken(() => get(endpoint))
    }

    return data
}
const post = async (endpoint, body) => {
    const response = await fetch(
        `${baseUrl}/${endpoint}`, {
        method: 'POST',
        body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.access}`
            },
        }
    )
    const data = await response.json()

    if(data.detail === 'token expired') {
        await getNewToken(() => post(endpoint, body))
    }

    return data
}
const getNewToken = async (callback) => {

   const response = await fetch(
       `${baseUrl}/login/get_new_token`,{
           method: 'POST',
           body: JSON.stringify({refresh:localStorage.getItem('refresh')}),
           headers: {
               'Content-Type': 'application/json',
           }
       }
   )

    const data = response.json()
    const  data = await post('get_new_token',{
        refresh: localStorage.getItem('refresh'),
    })
    if(data.accept) {
        localStorage.setItem('access_token', data.accept)
        await callback()
    }
}


