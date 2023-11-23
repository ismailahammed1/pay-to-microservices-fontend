import axios from "axios";

const uploadFile=async(file)=>{
    const data=new FormData()
    data.append('file',file)
    data.append("upload_preset", "Pay2microServices");

    try {
        const res=await axios.post("https://api.cliudinary.com/v1_1/dfn1s2ysa/image/upload",data)
        const {url}=res.data;
        return url;
    } catch (error) {
        console.log(error);
    }
}
export default uploadFile