export const checkImage = (file: File) => {
    const types = ['image/png', 'image/jpeg']
    let err = ''
    if(!file) return err = "File does not exist."
  
    if(file.size > 1024 * 1024) // 1mb
      err = "The largest image size is 1mb"
  
    if(!types.includes(file.type))
      err = "The image type is png / jpeg"
  
    return err;
}


export const imageUploade = async (file: File) => {
    const formData = new FormData()   
    formData.append("file", file)
    formData.append("upload_preset", "p8xhg43w")
    formData.append("cloud_name", "dn9vn1yuj")

    const res = await fetch("https://api.cloudinary.com/v1_1/dn9vn1yuj/upload", {
        method: "POST",
        body: formData
    })

    const data = await res.json()
    return {public_id: data.public_id, url: data.secure_url};
}