import {useRouter} from 'next/router'
const About =()=>{
    const router=useRouter();
    return (
        <div>
            About Us Opened
            <button onClick={()=> router.back()}>Go back</button>
            <br />
            Want to move to blog
            <button onClick={()=> router.push('/blog')}>Go to blog standard</button>  
        </div>
    )
}

export default About;