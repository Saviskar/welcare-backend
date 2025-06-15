import {createSigner,createVerifier} from 'fast-jwt';

const key = '66FCFAB253484BB63634BF6244F77';

export const createToken = (username) =>{

    const sign = createSigner({key:key,expiresIn:10000*60*60*2})
    
    const token = sign({
        user:username
    })

    return token;
}

export const verifyToken = (token) => {

    const verifier = createVerifier({key:key});

    const payload = verifier(token);

    return payload.user

}

export const revokeToken = (token) => {

}

