import { NextResponse } from "next/server";

const { ConnectDB } = require("@/lib/config/db");
const { default: EmailModel } = require("@/lib/models/emailModel");


const LoadDB = async () => {
    await ConnectDB();
}
LoadDB();
export async function POST(request) {
 const formData = await request.formData();

 const emailData = {
    email : `${formData.get('email')}`,
 }   
 await EmailModel.create(emailData);
 return NextResponse.json({success:true,msg:"Email Subcribed"})
}