module.exports = (app)=>{
    app.post('/disussion/:title',(req,res)=>{
        const discussion=[
            {
                title:"Best Solution",
                content:{
                    msg:"Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0."
                }
            },
            {
                title:"Best Solution",
                content:{
                    msg:"This is the easiest code"
                }
            },
            {
                title:"Best Solution",
                content:{
                    msg:"This is the easiest code"
                }
            },
            {
                title:"Best Solution",
                content:{
                    msg:"This is the easiest code"
                }
            },
        ]
        
        console.log(req.params.title)
        res.send(discussion)
    })
}