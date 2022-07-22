const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './content');
    },
    filename: function (req, file, cb) {             
        cb(null, new Date().toISOString().replace(/[.:]/g, '-')+ file.originalname.replace(/ /g,'_'));
    }
});
const uploadImg = multer({ storage: storage }).single('content_Image');

const router = require('express').Router();
const controllers = require('../controllers/contentControllers');
router.get('/getOne/:id',controllers.getOneContent);
router.get('/getAll',controllers.getAllContent);
router.post('/create',uploadImg, controllers.createContent);
router.delete('/delete/:id',controllers.deleteContent);
router.patch('/update/:id',uploadImg, controllers.updateContent);

module.exports = router;
