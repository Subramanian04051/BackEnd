

let a=[

    { language: 'JavaScript' }, { language: 'JavaScript' }, { language: 'TypeScript' }, { language: 'C++' }

]

 

let b=a.map((val)=>

{

    return {'language':val.language,count:a.filter((v)=>

    {

        return v.language==val.language

    }).length}

})

console.log([...new Set(b)])

 

 

 
