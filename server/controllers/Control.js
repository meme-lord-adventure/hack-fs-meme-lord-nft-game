

export const getRoutes = (req,res)=>{
    res.send('mainpage');
}

export const getRoutesExplore = (req,res)=>{
    res.send('explore');
}

export const getRoutesMembers = async (req,res)=>{
    
    res.send('members')

}

export const getRoutesConnect = (req,res)=>{
    res.send('connect');

}

export const postRoutesMembers = async (req,res) =>{
    const member = req.body;

   res.send('post received')
}