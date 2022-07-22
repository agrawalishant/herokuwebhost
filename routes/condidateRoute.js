const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './resume');
    },
    filename: function (req, file, cb) {        
        cb(null, new Date().toISOString().replace(/[.:]/g, '-')+ file.originalname.replace(/ /g,'_'));
    }
});
const uploadImg = multer({ storage: storage }).single('resume');

const router = require('express').Router();
const controllers = require('../controllers/condidateController');
router.get('/getOne/:id',controllers.getOnecandidateReq);
router.get('/getAll',controllers.getAllcandidateReq);
router.post('/create',uploadImg, controllers.createcandidateReq);
router.delete('/delete/:id',controllers.deletecandidateReq);
router.patch('/update/:id',uploadImg, controllers.updatecandidateReq);

module.exports = router;
