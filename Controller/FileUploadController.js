const multer = require("multer");
const responseUtil = require("../Utils/Responses");
const errorTypes = require("../Utils/constants");
const googleDriveController = require('../Controller/GoogleDriveController')
const storage = multer.diskStorage({
  //destination: "./uploads", --> for local uploading
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(
        responseUtil.errorResponse(
          errorTypes.BAD_REQUEST,
          "Only .png, .jpg and .jpeg format allowed!"
        )
      );
    }
  },
}).single("file");

module.exports.uploadFile = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.json(
        responseUtil.errorResponse(errorTypes.INTERNAL_SERVER_ERROR, err)
      );
    } else {
        const id =  googleDriveController.uploadFile(req.file.path);
        const data = {
            id : id, 
            file : req.file.originalname

        }
      res.json(
        responseUtil.succeessResponse(
          "POST",
          data,
          "File uploaded successfully"
        )
      );
    }
  });
};
