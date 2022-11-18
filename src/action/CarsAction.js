import axios from 'axios';

export const GET_LIST_CARS = "GET_LIST_CARS";

export const getListCars = () => {
    console.log("2. Masuk Action");
    return (dispatch) =>{
        //loading
        dispatch({
            type: GET_LIST_CARS,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //get API
        axios({
            method: 'GET',
            url: 'https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json',
            timeout: 120000
        })

        .then((response) => {
            console.log("3. Berhasil dapat data", response.data);
            //berhasil get API
            dispatch({
                type: GET_LIST_CARS,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
        })
        .catch((error) => {
            console.log("3. Gagal dapat data :", error);
            //gagal get API
            dispatch({
                type: GET_LIST_CARS,
                payload: {
                    loading: true,
                    data: false,
                    errorMessage: error.message
                }
            })
        })
    }
}