import express from  'express';
import { getProducts ,getProductById} from '../controller/product-controller.js';
import Razorpay from "razorpay";
import dotenv from 'dotenv';
import { userSignUp,userLogin} from '../controller/user-controller.js';
// import { addPaymentGateway ,paymentResponse } from '../controller/payment-controller.js';
dotenv.config();

const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:false}));

router.post('/signup', userSignUp);
router.post('/login',userLogin);
router.get('/products' ,getProducts);
router.get('/product/:id', getProductById);

router.post("/order",async(req, res)=>{

    try{
    const razorpay=new Razorpay({
        key_id:process.env.RAZORPAY_KEY_ID,
        key_secret:process.env.RAZORPAY_SECRET_KEY
    });
     const options=req.body;
     const order=await razorpay.orders.create(options);
     if(!order){
        return res.status(500).send("error");
     }
     res.json(order);
    }catch(err){
        console.log(err)
        res.status(500).send("error");
    }
})


export default router;
