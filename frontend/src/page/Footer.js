import '../style.css';
import BlogConst from "../resource/Blog.js"

export default function Main(){
  return(
    <>
      <footer>
        <h1>{BlogConst.TITLE}</h1>
        {BlogConst.FOOTER_COPYRIGHT}
      </footer>
    </>
  )
}