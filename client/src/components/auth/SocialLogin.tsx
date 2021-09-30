import React from 'react'
import { useDispatch } from 'react-redux'

import { FacebookLogin, FacebookLoginAuthResponse } from 'react-facebook-login-lite';

import { GoogleLogin, GoogleLoginResponse } from 'react-google-login-lite';

import { googleLogin, facebookLogin } from '../../redux/actions/authAction'

const SocialLogin = () => {
    const dispatch = useDispatch()
    const onSuccess = (googleUser: GoogleLoginResponse) => {
        const id_token = googleUser.getAuthResponse().id_token
        dispatch(googleLogin(id_token))
    }

    const onFBSuccess = (response: FacebookLoginAuthResponse) => {
        const { accessToken, userID } = response.authResponse
        dispatch(facebookLogin(accessToken, userID))
    }

    const onFailure = (error: any) => {
        console.log(error);
    }


    return (
        <>
            <div className="my-2">
                <GoogleLogin
                    client_id='556060228786-oadp3nvsicl37b745b01jrvtf1un1ov9.apps.googleusercontent.com'
                    cookiepolicy='single_host_origin'
                    onSuccess={onSuccess}
                />
            </div>

            <div className="my-2">
                <FacebookLogin
                appId="500618277872034"
                onSuccess={onFBSuccess}
                onFailure={onFailure}
                />
            </div>
        </>
    )
}

export default SocialLogin
