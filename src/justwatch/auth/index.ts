export const getToken = (): string=>{
  const token = process.env.JUSTWATCH_TOKEN;
  if(!token){
    throw new Error("JUSTWATCH_TOKEN NOT FOUND")
  }
  return token;
}