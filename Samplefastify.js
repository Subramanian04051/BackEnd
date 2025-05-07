const fastify=require('fastify')({logger:true})
const incomingrequest={
   
    type:'object',
    properties:{
        name:{type:'string'},
        age:{type:'number'}
    },
    required:['name','age']
 
     }
fastify.post('/hello',{schema: {
    // Refence the schema here
    body:incomingrequest}},async function(request,reply)
{
   reply.code(400).send({error:"hello world"})
    //return {message:"hello world"}
})
 
fastify.listen(3000, (err, address) => {
    fastify.log.info(`Server listening at ${address}`)
})
 
