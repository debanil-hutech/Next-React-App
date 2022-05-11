import  Image from 'next/image';
const Blog =(pageProps)=>{
    return (
        <div>
            <h1>Blog Post Starts from here </h1> <br />
            <p>So The blog is calculated from here where the post data comes in full format</p>
            <Image
            src="https://upload.wikimedia.org/wikipedia/en/4/4a/Iron_Man_Mark_III_armor_from_Iron_Man_%282008_film%29.jpg"
            alt='Added Changes'
            width={200}
            height={200}
            style={{borderRadius:'10px', width: '100%'}}
            />
        </div>
    )
}
export default Blog;