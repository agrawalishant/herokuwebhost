const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './about');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString().replace(/[.:]/g, '-')+ file.originalname.replace(/ /g,'_'));
    }
});
const uploadImg = multer({ storage: storage }).single('image');

const router = require('express').Router();

const controllers = require('../controllers/BlogControllers');

router.get('/getOne/:id', controllers.getOneBlog);
router.get('/getAll',controllers.getAllBlog);
router.post('/create',uploadImg,controllers.createBlog);
router.delete('/delete/:id',controllers.deleteBlog);
router.patch('/update/:id',uploadImg,controllers.updateBlog);
// router.get('/categoriesCount',controllers.getCategoriesCount);
// router.get('/recentBlog',controllers.recentBlog);

module.exports = router;
