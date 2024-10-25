import mongoose, { Schema } from "mongoose";
import { OperationInterface } from "../interfaces";


const operationSchema: Schema = new Schema<OperationInterface>(

    {
        fecha:{
            type:String,
            required: true
        },
        dia:{
            type:String,
            required: true
        },
        hora:{
            type:String,
            required: true,
            unique:true
        },
        status:{
            type:String,
            required: true,
            unique:true
        },
        resultado:{
            type: Number,
            required: true,
            unique:true
        },
        img:{
            type:String,
            required: true,
            unique:true
        }



    }, {
        timestamps: true,
        versionKey: false,

    }
)

export const OperationModel = mongoose.model<OperationInterface>('Operation', operationSchema)