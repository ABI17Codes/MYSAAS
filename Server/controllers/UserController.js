import { json } from "express";
import { Webhook } from "svix";
import userModel from "../model/userModel.js";

const clerkwebhooks = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    await whook.verify(json.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = req.body;

    switch(type){
        case "user.created":{
            const userData ={
                clerkId:data.id,
                email:data.email_addresses[0].email_address,
                firstname:data.first_name,
                lastname:data.last_name,
                photo:data.image_url
            }

            await userModel.create(userData)
            res.json({})
            break;
        }
        case "user.updated":{
            const userData ={
                email:data.email_addresses[0].email_address,
                firstname:data.first_name,
                lastname:data.last_name,
                photo:data.image_url
            }
            await userModel.findOneAndUpdate({clerkId:data.id},userData)
            res.json({})
            break;
        }
        case "user.deleted":{
            await userModel.findOneAndDelete({clerkId:data.id})
            res.json()
            break;
        }

        default:
            break;
    }

  } catch (err) {
    console.error(err.message);
    res.json({ success: false, message: err.message });
  }
};


export { clerkwebhooks }