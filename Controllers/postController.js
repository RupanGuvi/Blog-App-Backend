//create post
import Post from "../Models/postSchema.js";


export const createPost = async (req, res) => {
  try {
    const newPost = new Post({ ...req.body, user: req.user._id });
    await newPost.save();
    res
      .status(200)
      .json({ message: "Post Created Successfully", data: newPost });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//approve the post

export const approvePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { approved: true },
      { new: true }
    );
    res.status(200).json({ message: "Post Approved Successfully", data: post });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete the post
export const deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Post Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get post

// export const getPost = async (req, res) => {
//   try {
//     const page = parseInt(req.query.page) || 1;
//     const limit = parseInt(req.query.limit) || 10;
//     const skip = (page - 1) * limit;
//     const posts = await Post.find()
//       .populate("user", "name")
//       .skip(skip)
//       .limit(limit);
//     const totalPosts = await Post.countDocuments();
//     res.status(200).json({
//       message: "Posts Fetched Successfully",
//       posts,
//       totalPages: Math.ceil(totalPosts / limit),
//       currentPage: page,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

//without pagination
export const getPost = async (req, res) => {
  try {
    const posts = await Post.find({ approved: true }).populate("user", "name");
    res.status(200).json({ message: "Posts Fetched Successfully", posts });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}