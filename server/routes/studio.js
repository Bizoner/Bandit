var express = require('express');
var router = express.Router();
const multer = require('multer')
const upload = multer({ storage: multer.memoryStorage() })
var studio_controller = require('../controllers/studio');
const {uploadChannels,uploadExport} = require('../controllers/cloudinary');

router.post('/getDataForStudio',studio_controller.getDataForStudio);
router.post('/saveDataInStudio',upload.array('newAudioFiles',100),uploadChannels,studio_controller.saveDataInStudio);
router.post('/exportSong',upload.single('export'),uploadExport,studio_controller.saveExportedSong)
router.post('/checkAndLockSong',studio_controller.checkAndLock);

module.exports = router;