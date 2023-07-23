import { useState, createContext, useContext} from 'react'
import Router from 'next/router'
import { gql, HttpLink, InMemoryCache, ApolloProvider, ApolloClient } from '@apollo/client'


const authcontext = createContext()


export function AuthProvider({children}){
    const auth = userAuthentication()
    return(
        <authcontext.Provider value={auth}>
            <ApolloProvider client={auth.createApolloClient()}>
                {children}
            </ApolloProvider>
        </authcontext.Provider>
    )
}


export const useAuthentication = () => useContext(authcontext)


function userAuthentication(){
    const [ authToken, setAuthToken ] = useState(null)
    const [ username, setUsername ] = useState(null)

    function createApolloClient(){
        const link = new HttpLink({
            uri: 'http://localhost:8000/graphql/',
            credentials: 'include',
        })

        return new ApolloClient({
            link,
            cache: new InMemoryCache(),
        })
    }

    const signIn = async ({ email, password }) => {
        const client = createApolloClient()

        const result = await client.mutate({
            mutation: loginMutation,
            variables: { email, password}
        })

        if(result?.data?.tokenAuth?.token){
            setAuthToken(result.data.tokenAuth.token)
            setUsername(result.data.tokenAuth.payload.username)
            localStorage.setItem("token", JSON.stringify(result.data.tokenAuth.token))
            //console.log(result)
            Router.push('/')
        }
    }

    const signOut = async () => {
        const client = createApolloClient()

        const result = await client.mutate({
            mutation: logoutMutation,
        })
        
}

    return{
        signIn,
        signOut,
        createApolloClient,
    }
}



const loginMutation = gql `
    mutation JWToken($email: String!, $password: String!){
        tokenAuth(email: $email, password: $password){
            token
            payload
        }
    }
`

const logoutMutation = gql `
mutation {
    deleteTokenCookie {
      deleted
    }
  }
`