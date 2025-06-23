import mongoose, { Schema, Document, Model } from 'mongoose';

interface IArticle extends Document {
    userId: mongoose.Types.ObjectId,
    title: string;
    subtitle?: string; // Subtitle is often optional
    content: string;
    category: string;
    tags?: string[]; // Tags are often an array of strings
    featuredImage?: string; // Assuming this will store a URL to the image
    createdAt: Date;
    updatedAt: Date;
    slug: string;
    views: number;
    likes: mongoose.Types.ObjectId[];
    dislikes: mongoose.Types.ObjectId[];
}

const ArticleSchema: Schema = new Schema<IArticle>({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true,
        unique: true, // Assuming article titles should be unique
        trim: true, // Remove whitespace from both ends of a string
    },
    subtitle: {
        type: String,
        trim: true,
    },
    content: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        trim: true,
    },
    tags: [
        {
            type: String,
            trim: true,
        }
    ],
    featuredImage: {
        type: String,
        default: '',
        trim: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    views: {
        type: Number,
        default: 0,
    },
    likes: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        default: [], 
    },
    dislikes: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        default: [],
    },
}, {
    timestamps: true,
});

const Article: Model<IArticle> = mongoose.models.Article || mongoose.model<IArticle>('Article', ArticleSchema);

export default Article;
