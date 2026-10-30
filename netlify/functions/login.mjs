const endpoint='https://crew.abxair.com/api/netline/crew/pems/rest/pems/login';
export default async (request) => {
  if(request.method!=='POST') return new Response('Method not allowed',{status:405});
  const origin=request.headers.get('origin');
  const host=new URL(request.url).origin;
  if(origin && origin!==host) return Response.json({ok:false,message:'Origin not permitted'},{status:403});
  let data;
  try{data=await request.json()}catch{return Response.json({ok:false,message:'Invalid request'},{status:400})}
  const username=typeof data.username==='string'?data.username.trim():'';
  const password=typeof data.password==='string'?data.password:'';
  if(!username||!password||username.length>200||password.length>500) return Response.json({ok:false,message:'Username and password required'},{status:400});
  try {
    // Experimental only: the ABX request payload has NOT been verified. No credential persistence.
    const upstream=await fetch(endpoint,{method:'POST',headers:{'content-type':'application/json','accept':'application/json'},body:JSON.stringify({username,password}),redirect:'manual',signal:AbortSignal.timeout(12000)});
    const raw=await upstream.text();
    let response;try{response=JSON.parse(raw)}catch{response=null}
    const confirmed=upstream.ok && response?.success===true;
    // Do not relay raw responses, cookies, tokens, credentials or personally identifying details.
    return Response.json({ok:confirmed,upstreamStatus:upstream.status,message:confirmed?'Login endpoint accepted request; roster session not yet established.':'Login not verified. The NetLine payload or session flow may differ.'},{status:200,headers:{'cache-control':'no-store','x-content-type-options':'nosniff'}});
  }catch{return Response.json({ok:false,message:'Could not reach the ABX authentication service.'},{status:502,headers:{'cache-control':'no-store'}})}
};
