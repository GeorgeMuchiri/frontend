import { gql, ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"

function test({data}) {
  return (
    <div>
        {data.map((prod)=>(<>
        <h1>{prod.name}</h1>
        <p>{prod.price}</p>
        </>))}

        </div>
  )
}



export default test




export async function getStaticProps(){
    const client = createApolloClient()

    const { data } = await client.query({
        query: gql`
        query{
            allProducts{
              name
              id
              price
              image
            }
          }
        `
    })

    return {
        props:{
            data: data.allProducts
        }
    }
}


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
