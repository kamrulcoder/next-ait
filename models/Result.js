import mongoose from 'mongoose';


const resultSchema = new mongoose.Schema(
  {
    roll: { type: Number, required: true , unique: true},
    name: { type: String, required: true },
    father: { type: String, required: true },
    mother: { type: String, required: true },
    course: { type: String, required: true },
    session: { type: String, required: true },
    result: { type: String, required: true },
    certificate_issue_date:{ type: String, required: true },
    mobile: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Result =
  mongoose.models.Result || mongoose.model('Result', resultSchema);
export default Result;