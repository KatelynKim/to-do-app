import dbConnect from "../../utils/dbConnect";

dbConnect();
export default async (request, response) => {
    response.json({ test: 'test'});    
}