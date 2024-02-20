import createRefresh from 'react-auth-kit/createRefresh';
import AxiosConfig from "./AxiosConfig.jsx";

const refreshToken = createRefresh({
    interval: 10 ,
    refreshApiCallback: async (param) => {
        try {
            const response = await AxiosConfig().post("/users/refresh", param, {
                headers: {'Authorization': `Bearer ${param.authToken}`}
            })
            return {
                isSuccess: true,
                newAuthToken: response.data.token,
                newAuthTokenExpireIn: 10,
                newRefreshTokenExpiresIn: 60
            }
        }
        catch(error){
            console.error(error)
            return {
                isSuccess: false
            }
        }
    }
})

export default refreshToken