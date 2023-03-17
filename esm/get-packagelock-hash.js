import crypto from 'crypto';
import fs from 'fs';
export var getPackagelockHash = function (packagelockPath) {
    var _a, _b, _c, _d;
    if (!packagelockPath)
        return;
    var hashSum = crypto.createHash('md5');
    var contents = fs.readFileSync(packagelockPath, 'utf-8');
    var packageBlob = JSON.parse(contents);
    delete packageBlob.name;
    (_b = (_a = packageBlob['packages']) === null || _a === void 0 ? void 0 : _a['']) === null || _b === void 0 ? true : delete _b.name;
    delete packageBlob.version;
    (_d = (_c = packageBlob['packages']) === null || _c === void 0 ? void 0 : _c['']) === null || _d === void 0 ? true : delete _d.version;
    var fileJson = JSON.stringify(packageBlob);
    hashSum.update(Buffer.from(fileJson));
    return hashSum.digest('hex');
};