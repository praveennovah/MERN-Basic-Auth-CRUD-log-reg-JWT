import jwt from "jsonwebtoken"
//middleWare to verify and decode the token
export const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ msg: "No token, authorization denied" });

  try {
    //Extracting the payload data from the token 
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ msg: "Token is not valid" });
  }
};
