export default class API{

    baseUrl='https://api.spacexdata.com/v4/'

    get=async(url)=>{
        let res= await fetch(url)

        if (!res.ok) throw new Error(`Ошибка получения данных с ${url}, ${res.status}`)

        return await res.json()
    };
    getRocket=async()=> await this.get(this.baseUrl+'rockets');
    getLounch=async()=> await this.get(this.baseUrl+'launches/past');
    getCompany=async()=> await this.get(this.baseUrl+'company');
}