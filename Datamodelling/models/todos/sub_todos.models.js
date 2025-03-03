import mongoose, { Schema } from "mongoose";

const subTodoSchema = new Schema(
  {},
  {
    timestamps: true,
  }
);

export const subTodo = mongoose.model("SubTodo", subTodoSchema);
