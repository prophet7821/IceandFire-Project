import axios from 'axios';
import url from './url';


export const readData = async () => {
    try {
        const data = await axios.get(url)
        return data;
    } catch (error) {
        console.log(error);
    }
}