import {useRouter} from 'next/router'
const About =({data})=>{
    console.log(data);
    const router=useRouter();
    return (
        <div>
            About Us Opened
            <button onClick={()=> router.back()}>Go back</button>
            <br />
            Want to move to blog
            <button onClick={()=> router.push('/blog')}>Go to blog standard</button> <br />
            Number of Subscribers <br />
            {data}
        </div>
    )
}

export const getStaticProps=async()=>{
    const res= await fetch('https://api.github.com/repos/preactjs/preact');
    const json=await res.json();
    console.log(json);
    return{
     props:{
         data:json.subscribers_count
     }   
    }
}

export default About;