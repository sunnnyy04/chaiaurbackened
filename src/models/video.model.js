import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema=new Screen(
    {
        videoFile:{
            type2:String,//cloudinary url
            required:true
        },
        thumpnail:{
            type:String,//cloudinary url
            required:true

        },
        description:{
            type:String,
            reqired:true
        },
        duration:{
            type:Number,
            required:true

        },
        views:{
            type:Number,
            default:0
        },
        isPublished:{
            type:Boolean,
            default:true
        },
        owner:{
            type: Schema.Types.ObjectId,
            ref:"User"
        }

},{timestamp:true})

videoSchema.plugin(mongooseAggregatePaginate)

export const Video= mongoose.model("Video",videoSchema)