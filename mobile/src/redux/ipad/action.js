
import axios from "axios";


export const GETIPADDATA = "GETIPADDATA";

export const IpadData = (payload) => ({

    type : GETIPADDATA,
    payload : payload
})

export const getIpadData = () => (dispatch) => {

    axios.get('https://backend1242.herokuapp.com/Ipads').then((res)=>{
        dispatch(IpadData(res.data))
    })
}