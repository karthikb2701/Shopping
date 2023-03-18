import React, { useEffect, useState} from 'react';
import axios from 'axios';
import Product from "../component/Product";
import Header from '../component/header';
import Sidebar from '../component/sidebar';
function Featured (){
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);


	useEffect(() => {
		console.log("Ssss");
		const token="Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo";
		const config = {
			headers: { Authorization: `Bearer ${token}` }
		};
	  const fetchData = async () =>{
		setLoading(true);
		try {
		  const response = await axios.get('https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products',config);

          const response1 = await axios.get('https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/featured',config);


          console.log(response1.data.featured);

          console.log(response);
          setData2(response1.data.featured);
		
		  setData(response.data.products);
          var u=
          response1.data.featured.map((e)=>{
              console.log(e.productId)
              var b=e.productId;
             return response.data.products[b];
          })
          console.log(u)
          setData3(u);

          console.log(data2);
     


		
		  console.log(response);
	
		} catch (error) {
		  console.error(error.message);
		}
		setLoading(false);
	  }
  
	  fetchData();
	}, []);
   
	return <>
<Header />
<div className='row'>
<div className='col-3'>
			<Sidebar />
			</div>
	<div className='col-9'>
	
		<div className='row'>
			
		
		
{

data3.map((item) => (
	<div className='col-4'>
        <Product item={item} key={item.id} />
		</div>
      ))}
	  </div>
	</div>
</div>


		
		

	


	</>
}

export default Featured;
