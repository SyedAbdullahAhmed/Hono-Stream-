import { Hono } from 'hono'
import { UserModel } from './db/schema'
import dbConnect from './db/connect'
import { streamText } from 'hono/streaming'
import { logger } from 'hono/logger'
import { GoogleGenerativeAI } from "@google/generative-ai";


const app = new Hono()
dbConnect()

app.use(logger())

// get all users
app.get('/user', async (c) => {
  try {
    const users = await UserModel.find();
    if (users.length === 0) return c.json({ message: "No users found" }, 400)
    return c.json({
      success: true, users
    }, 200)
  } catch (error: any) {
    return c.json({
      success: false,
      message: error.message
    }, 400)
  }
})

// get user by id
app.get('/user/:id', async (c) => {
  try {
    const id = c.req.param('id');
    if (!id) return c.json({ message: "Id not found" }, 400)
    const user = await UserModel.find({ _id: id });
    if (user.length === 0) return c.json({ success: false, message: "No user found" }, 400)
    return c.json({
      success: true, user
    }, 200)
  } catch (error: any) {
    return c.json({
      success: false,
      message: error.message
    }, 400)
  }
})

// create new user  
app.post('/user', async (c) => {
  try {
    const user = await c.req.json();
    if (!user.name || !user.password || !user.age || !user.email) {
      return c.json({ success: false, message: "Plz fill all values" }, 400)
    }
    const createdUser = await UserModel.create(user);
    if (!createdUser) {
      return c.json({ success: false, message: "User Creation failed" }, 400)
    }
    return c.json({ success: true, message: "User created successfully" }, 200)
  } catch (error: any) {
    return c.json({
      success: false,
      message: error.message
    }, 400)
  }
})

// update user by id
app.put('/user/:id', async (c) => {
  try {
    const data = await c.req.json();
    const id = c.req.param('id');
    if (!id) return c.json({ message: "Id not found" }, 400)

    const updatedUser = await UserModel.findOneAndUpdate(
      { _id: id }, { $set: data }, { new: true }
    );
    if (!updatedUser) {
      return c.json({ success: false, message: "User Updation failed" }, 400)
    }
    return c.json({ success: true, message: "User updated successfully" }, 200)
  } catch (error: any) {
    return c.json({
      success: false,
      message: error.message
    }, 400)
  }
})

// delete user by id
app.delete('/user/:id', async (c) => {
  try {

    const id = c.req.param('id');
    if (!id) return c.json({ message: "Id not found" }, 400)

    const deletedUser = await UserModel.findOneAndDelete({ _id: id });
    if (!deletedUser) {
      return c.json({ success: false, message: "User deletion failed" }, 400)
    }

    return c.json({ success: true, message: "User deleted successfully" }, 200)

  } catch (error: any) {
    return c.json({
      success: false,
      message: error.message
    }, 400)
  }
})



// gemini
app.get('/gemini', async (c) => {
  try {
    const prompt = c.req.query('prompt') || '';
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt) ;
    // console.log(result.response.text());

    const responseText = result.response.text();

    return streamText(c, async (stream) => {
      for (const chunk of responseText.split(" ")) {
        await stream.write(chunk + " ")
        await stream.sleep(100)
      }
    })

  } catch (error: any) {
    return c.json({
      success: false,
      message: error.message
    }, 400)
  }
})


export default app
