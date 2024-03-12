
import Layout from "../components/layout/Layout";
import { useAuth } from "../context/auth"



const HomePage = () => {
  const{auth} = useAuth();
  console.log(auth)
  return (
       <Layout>
         <h1>home page</h1>
         <pre>{JSON.stringify(auth)}</pre>
       </Layout>
          
     
  
  )
}

export default HomePage